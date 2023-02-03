import useInput from '../../hooks/useInput';
import { TodoDetailProps } from '../../types';
import { Input } from '../Input';

const TodoDetail = ({ todo }: TodoDetailProps) => {
  const { onChangeText } = useInput('');

  return (
    <>
      <div className="z-10 h-2/3 w-1/3 flex-col justify-center rounded-[20px] border-2 border-black  bg-white">
        <div className="mt-2">제목</div>
        <Input
          type="text"
          placeholder="제목"
          className="mb-2 w-4/5 border-2 border-black pl-2"
          onChange={onChangeText}
          defaultValue={todo.title}
          name={'제목'}
        />
        <div>설명</div>
        <textarea
          placeholder="설명"
          className="mb-1 h-2/3 w-4/5 resize-none border-2 border-black pl-2"
          onChange={onChangeText}
          defaultValue={todo.desc}
          name={'설명'}
        />
        <div>
          <button className="rounded-[7px] bg-blue-500 p-2 text-white">
            수정하기
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoDetail;
