import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { listState } from '../recoil';
import { TodoListType } from '../types';

const useInput = (initialState: string) => {
  const [todoList, setTodoList] = useRecoilState<TodoListType[]>(listState);
  const [text, setText] = useState<string>(initialState);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // KeyboardEvent 참고 https://minjs.tistory.com/2
  const addTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    const todo = {
      id: uuidv4(),
      title: text,
      desc: '',
      status: 'todo',
    };

    if (e.key === 'Enter') {
      setTodoList([...todoList, todo]);
      setText('');
      inputRef.current?.focus();
    }
  };

  return {
    onChangeText,
    text,
    setText,
    inputRef,
    addTodo,
  };
};

export default useInput;
