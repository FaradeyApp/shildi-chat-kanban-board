import { BoardTask } from '@/enitities/types';
import { mockUsers } from '.';
import { comments } from './comments';

export const mockTasks: Record<string, BoardTask> = {
  '1': {
    id: '1',
    name: 'Task 1',
    status: 'BACKLOG',
    priority: 'medium',
    description: '1 Название задачи Описание По умолчанию отображается тот текущий',
    dates: {
      start: '16.01.2023',
      end: '08.03.2023',
    },
    producer: mockUsers[1],
    workers: [mockUsers[2], mockUsers[3], mockUsers[4]],
    comments: [comments[1], comments[1]],
  },
  '2': {
    id: '2',
    name: 'Task 2',
    status: 'BACKLOG',
    priority: 'hight',
    description: '2 Название задачи Описание По умолчанию отображается тот текущий',
    dates: {
      start: '16.02.2023',
      end: '08.05.2023',
    },
    producer: mockUsers[2],
    workers: [mockUsers[1], mockUsers[3]],
    comments: [],
  },
  '3': {
    id: '3',
    name: 'Task 3',
    status: 'DONE',
    priority: 'medium',
    description: '3 Название задачи Описание По умолчанию отображается тот текущий',
    dates: {
      start: '16.01.2022',
      end: '08.03.2026',
    },
    producer: mockUsers[1],
    workers: [mockUsers[2]],
    comments: [],
  },
  '4': {
    id: '4',
    name: 'Task 4',
    status: 'DONE',
    priority: 'low',
    description: '4 Название задачи Описание По умолчанию отображается тот текущий',
    dates: {
      start: '19.01.2023',
      end: '07.03.2023',
    },
    producer: mockUsers[1],
    workers: [mockUsers[2], mockUsers[3], mockUsers[4]],
    comments: [],
  },
  '5': {
    id: '5',
    name: 'Task 5',
    status: 'TODO',
    priority: 'medium',
    description: '5 Название задачи Описание По умолчанию отображается тот текущий',
    dates: {
      start: '26.01.2023',
      end: '01.03.2023',
    },
    producer: mockUsers[1],
    workers: [mockUsers[2], mockUsers[3], mockUsers[4]],
    comments: [],
  },
  '6': {
    id: '6',
    name: 'Task 6',
    status: 'TODO',
    priority: 'medium',
    description: 'Название задачи Описание По умолчанию отображается тот текущий',
    dates: {
      start: '05.01.2023',
      end: '08.07.2023',
    },
    producer: mockUsers[1],
    workers: [mockUsers[2], mockUsers[3], mockUsers[4]],
    comments: [],
  },
  '7': {
    id: '7',
    name: 'Task 7',
    status: 'BACKLOG',
    priority: 'low',
    description: '7 Название задачи Описание По умолчанию отображается тот текущий',
    dates: {
      start: '16.01.2023',
      end: '08.04.2023',
    },
    producer: mockUsers[1],
    workers: [],
    comments: [],
  },
  '8': {
    id: '8',
    name: 'Task 8',
    status: 'BACKLOG',
    priority: 'medium',
    description: '8 Название задачи Описание По умолчанию отображается тот текущий',
    dates: {
      start: '10.01.2023',
      end: '08.04.2023',
    },
    producer: mockUsers[1],
    workers: [],
    comments: [],
  },
};
