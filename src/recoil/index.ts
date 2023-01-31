import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { TodoList } from '../types';

export const list = ['알고리즘', '면접 준비', '프로젝트', '이력서 작성'];

export const objList = [
  {
    id: uuidv4(),
    title: '알고리즘 문제 풀이',
    desc: 'leetcode & 프로그래머스 하루에 각 1문제씩 풀기',
  },
  {
    id: uuidv4(),
    title: '면접 준비',
    desc: '하루에 기술 면접 2개씩 설명해보기',
  },
  {
    id: uuidv4(),
    title: '토이 프로젝트 하기',
    desc: 'react, ts, tailwind, recoil, react-query 사용해보기',
  },
  {
    id: uuidv4(),
    title: '이력서 작성',
    desc: '자기소개, Tech stack, 프로젝트 설명',
  },
];

export const todoListState = atom<string[]>({
  key: 'todoListState',
  default: list,
});

export const objListState = atom<TodoList[]>({
  key: 'objListState',
  default: objList,
});

export const todoTextState = atom({
  key: 'todoTextState',
  default: '',
});
