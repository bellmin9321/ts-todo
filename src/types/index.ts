import {
  HTMLProps,
  ChangeEvent,
  KeyboardEvent,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';

export interface TodoListType {
  id: number;
  title: string;
  desc?: string;
}

export interface ColumnsType {
  [key: string]: {
    items: TodoListType[];
  };
}

export interface TodoDetailProps {
  todo: TodoListType;
}

export interface InputProps extends HTMLProps<HTMLInputElement> {
  defaultValue?: string | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export interface ListProps {
  columnId: string;
  column: { status: string; items: TodoListType[] };
  children: ReactNode;
}

export interface ListItemProps {
  state: string;
  item: TodoListType;
  index: number;
}

export interface ModalProps {
  handleModal: Dispatch<SetStateAction<boolean>>;
  component: ReactNode;
}

export interface ModalLayoutProps {
  children: ReactNode;
  onHandleModal: (state: boolean) => void;
}
