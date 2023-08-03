import { makeAutoObservable, runInAction } from 'mobx';

import { getAllTasks } from '@/shared/api';
import { DataCache } from '@/shared/lib/DataCache';
import { type TaskStatus, type Task } from '@/enitities/task';
import { BoardColumnStore } from './BoardColumnStore';

function createEmptyColumns(tasks: Task[]) {
  const columns: Partial<Record<TaskStatus, BoardColumnStore>> = {};
  tasks.forEach(({ status }) => {
    const { type } = status;
    if (!columns[type]) {
      columns[type] = new BoardColumnStore(type);
    }
  });
  return columns;
}

function createColumns(tasks: Task[]) {
  const columns = createEmptyColumns(tasks);
  tasks.forEach((task) => columns[task.status.type]?.addTask(task));
  return Object.values(columns);
}

export class BoardStore {
  tasks = new DataCache<Task[]>({ defaultValue: [] });
  columns: BoardColumnStore[] = [];
  boardUuid = '';

  constructor() {
    makeAutoObservable(this);
  }

  init = async () => {
    if (this.tasks.isEmpty && this.boardUuid) {
      await this.tasks.set(() => getAllTasks(this.boardUuid));
      runInAction(() => {
        this.columns = createColumns(this.tasks.data);
      });
    }
  };

  setBoardUuid = (boardUuid: string) => {
    if (!this.boardUuid || this.boardUuid !== boardUuid) {
      this.boardUuid = boardUuid;
    }
  };

  addNewTask = (newTask: Task) => {
    let column = this.columns.find((column) => column.title === newTask.status.type);
    if (!column) {
      column = new BoardColumnStore(newTask.status.type);
      this.columns.push(column);
    }
    column?.addTask(newTask);
  };

  updateTask = (updatedTask: Task) => {
    const outdatedTask = this.tasks.data.find((task) => task.id === updatedTask.id);
    const column = this.columns.find((column) => column.title === outdatedTask?.status.type);

    if (outdatedTask?.status.type === updatedTask.status.type) {
      column?.updateTask(updatedTask);
    } else {
      column?.removeTask(updatedTask);
      this.addNewTask(updatedTask);
    }

    if (outdatedTask) {
      Object.assign(outdatedTask, updatedTask);
    }
  };
}

export const boardStore = new BoardStore();
