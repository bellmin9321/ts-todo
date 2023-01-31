import { atom, selector } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { TodoListType } from '../types';

export const todoList = [
  {
    id: uuidv4(),
    title: '알고리즘 문제 풀이',
    desc: 'leetcode & 프로그래머스 하루에 각 1문제씩 풀기',
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: '면접 준비',
    desc: '하루에 기술 면접 2개씩 설명해보기',
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: '토이 프로젝트 하기',
    desc: 'react, ts, tailwind, recoil, react-query 사용해보기',
    status: 'todo',
  },
  {
    id: uuidv4(),
    title: '이력서 작성',
    desc: '자기소개, Tech stack, 프로젝트 설명',
    status: 'todo',
  },
];

export const listState = atom<TodoListType[]>({
  key: 'listState',
  default: todoList,
});

export const todoListState = selector<TodoListType[]>({
  key: 'todoListState',
  get: ({ get }) => {
    const list = get(listState);

    return list.filter(item => item.status === 'todo');
  },
});

export const doneListState = selector<TodoListType[]>({
  key: 'doneListState',
  get: ({ get }) => {
    const list = get(listState);

    return list.filter(item => item.status === 'done');
  },
});
