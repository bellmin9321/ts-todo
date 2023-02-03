import { FC } from 'react';
import useInput from '../../hooks/useInput';
import { Input } from '../Input';

const Header: FC = () => {
  const { onChangeText, text, inputRef, addTodo } = useInput('');

  return (
    <div className="m-0 h-24 flex-row content-center justify-center bg-black">
      <div className="py-3 text-4xl font-bold text-yellow-300">TODO LIST</div>
      <Input
        type="text"
        placeholder="할 일을 입력하세요"
        autoFocus={true}
        className="text-m w-1/3 pl-2"
        onChange={onChangeText}
        onKeyDown={addTodo}
        value={text}
        name={'할일'}
        ref={inputRef}
      />
    </div>
  );
};

export default Header;
