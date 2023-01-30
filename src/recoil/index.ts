import { atom } from 'recoil';
import { list } from '../constants';

export const todoListState = atom({
  key: 'todoListState',
  default: list,
});

export const todoTextState = atom({
  key: 'todoTextState',
  default: '',
});
