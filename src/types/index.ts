import { HTMLProps, ChangeEvent, KeyboardEvent, RefObject } from 'react';

export interface TodoList {
  id: string;
  title: string;
  desc: string;
}

export interface InputProps extends HTMLProps<HTMLInputElement> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
