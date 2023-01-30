import React, {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useRef,
} from 'react';
import { useRecoilState } from 'recoil';
import { todoListState, todoTextState } from '../../recoil';
import Input from '../Input';

const Header: FC = () => {
  const [todoList, setTodoList] = useRecoilState<string[]>(todoListState);
  const [text, setText] = useRecoilState<string>(todoTextState);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current!.focus();
  });

  const onChangeText = (e: ChangeEvent<HTMLInputElement | null>) => {
    setText(e.target.value);
  };

  // KeyboardEvent 참고 https://minjs.tistory.com/2
  const onAddTodo = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setText('');
      setTodoList([...todoList, text]);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="m-0 h-24 flex-row content-center justify-center bg-black">
      <div className="text-4xl font-bold text-yellow-300">TODO LIST</div>
      <Input
        type="text"
        placeholder=" 할 일을 입력하세요"
        className="text-m mt-5 w-1/3"
        onChange={onChangeText}
        onKeyDown={onAddTodo}
        value={text}
        ref={inputRef}
      />
    </div>
  );
};

export default Header;
