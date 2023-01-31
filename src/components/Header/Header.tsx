import { FC, useEffect } from 'react';
import useInput from '../../hooks/useInput';
import { Input } from '../Input';

const Header: FC = () => {
  const { onChangeText, text, inputRef, addTodo } = useInput('');

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className="m-0 h-24 flex-row content-center justify-center bg-black">
      <div className="text-4xl font-bold text-yellow-300">TODO LIST</div>
      <Input
        type="text"
        placeholder="할 일을 입력하세요"
        className="text-m mt-5 w-1/3 pl-2"
        onChange={onChangeText}
        onKeyDown={addTodo}
        value={text}
        ref={inputRef}
      />
    </div>
  );
};

export default Header;
