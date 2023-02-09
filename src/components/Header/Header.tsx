import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import useInput from '../../hooks/useInput';
import { Input } from '../Input';

const Header: FC = () => {
  const { onChangeText, text, inputRef, addTodo } = useInput('');
  const [user, setUser] = useState<string>('로그인');

  const login = async () => {
    const { status } = await fetch('/login', {
      method: 'POST',
    });

    if (status === 200) {
      getUserId();
    }
  };

  const getUserId = async () => {
    return await (await fetch('/user')).json();
  };

  useQuery('login', getUserId, {
    onSuccess: data => setUser(data.id),
  });

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
      <button
        className="text-l absolute right-0 top-0 m-4 p-1 font-bold text-gray-100"
        onClick={login}
      >
        {user}
      </button>
    </div>
  );
};

export default Header;
