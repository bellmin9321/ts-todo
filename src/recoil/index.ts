import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { ColumnsType, TodoListType } from '../types';

export const todoList = [
  {
    id: 0,
    title: '알고리즘 문제 풀이',
    desc: 'leetcode & 프로그래머스 하루에 각 1문제씩 풀기',
  },
  {
    id: 1,
    title: '면접 준비',
    desc: '하루에 기술 면접 2개씩 설명해보기',
  },
  {
    id: 2,
    title: '토이 프로젝트 하기',
    desc: 'react, ts, tailwind, recoil, react-query 사용해보기',
  },
  {
    id: 3,
    title: '이력서 작성',
    desc: '자기소개, Tech stack, 프로젝트 설명',
  },
];

export const columnsOfStatus = {
  [uuidv4()]: {
    status: 'todo',
    items: todoList,
  },
  [uuidv4()]: {
    status: 'done',
    items: [],
  },
};

export const todoListState = atom<TodoListType[]>({
  key: 'todoListState',
  default: todoList,
});

export const todoState = atom<TodoListType>({
  key: 'todoState',
  default: {
    id: 0,
    title: '',
    desc: '',
  },
});

export const columnsState = atom<ColumnsType>({
  key: 'columnsState',
  default: columnsOfStatus,
});

export const modalState = atom<boolean>({
  key: 'modalState',
  default: false,
});
