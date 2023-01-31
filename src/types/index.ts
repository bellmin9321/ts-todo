import {
  HTMLProps,
  ChangeEvent,
  KeyboardEvent,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

export interface TodoListType {
  id: string;
  title: string;
  desc?: string;
  status: string;
}

export interface TodoDetailProps {
  todo: TodoListType;
}

export interface InputProps extends HTMLProps<HTMLInputElement> {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export interface ListProps {
  state: string;
  list: TodoListType[];
  onCheckTodo: (id: string, status: string) => void;
  onShowTodoDetail: (item: TodoListType) => void;
  onDeleteTodo: (index: number) => void;
}

export interface ModalProps {
  handleModal: Dispatch<SetStateAction<boolean>>;
  component: ReactNode;
}

export interface ModalLayoutProps {
  children: ReactNode;
  onHandleModal: (state: boolean) => void;
}
