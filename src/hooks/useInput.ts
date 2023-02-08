import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { columnsState, todoListState } from '../recoil';

const useInput = (initialState: string) => {
  const todoList = useRecoilValue(todoListState);
  const [columns, setColumns] = useRecoilState(columnsState);
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
    const newTodo = {
      id: todoList.length,
      title: text,
      desc: '',
    };

    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      const [[columnId, column]] = Object.entries(columns).filter(
        ([, obj]) => obj.status === 'todo',
      );

      setColumns({
        ...columns,
        [columnId]: { ...column, items: [...column.items, newTodo] },
      });
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
