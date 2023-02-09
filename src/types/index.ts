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
    status: string;
    items: TodoListType[];
  };
}

export interface InputProps extends HTMLProps<HTMLInputElement> {
  defaultValue?: string | undefined;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

export interface ListProps {
  columnId: string;
  column: { status: string; items: TodoListType[] };
  index: number;
  children: ReactNode;
}

export interface ListItemProps {
  columnId: string;
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
