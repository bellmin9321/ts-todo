import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { listState } from '../recoil';
import { TodoListType } from '../types';

const useInput = (initialState: string) => {
  const [todoList, setTodoList] = useRecoilState<TodoListType[]>(listState);
  const [text, setText] = useState<string>(initialState);
  const [title, setTitle] = useState<string>(initialState);
  const [desc, setDesc] = useState<string>(initialState);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeText = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    switch (e.target.name) {
      case '제목':
        setTitle(e.target.value);
        break;

      case '설명':
        setDesc(e.target.value);
        break;

      default:
        setText(e.target.value);
        break;
    }
  };

  // KeyboardEvent 참고 https://minjs.tistory.com/2
  const addTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    const todo = {
      id: uuidv4(),
      title: text,
      desc: '',
      status: 'todo',
    };

    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      setTodoList([...todoList, todo]);
      setText('');
      inputRef.current?.focus();
    }
  };

  return {
    onChangeText,
    text,
    setText,
    title,
    setTitle,
    desc,
    setDesc,
    inputRef,
    addTodo,
  };
};

export default useInput;
