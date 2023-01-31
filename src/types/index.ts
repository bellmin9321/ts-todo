import { HTMLProps, ChangeEvent, KeyboardEvent } from 'react';

export interface TodoListType {
  id: string;
  title: string;
  desc?: string;
  status: string;
}

export interface InputProps extends HTMLProps<HTMLInputElement> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}
