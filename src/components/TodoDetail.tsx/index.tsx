import { TodoDetailProps } from '../../types';
import { Input } from '../Input';

const TodoDetail = ({ todo }: TodoDetailProps) => {
  return (
    <>
      <div className="z-10 h-2/3 w-1/3 flex-col justify-center rounded-[20px] border-2 border-black  bg-white">
        <Input
          placeholder="제목"
          className="my-5 w-4/5 border-2 border-black pl-2"
          defaultValue={todo.title}
        />
        <Input
          placeholder="정확히 무엇을 할 지 입력하세요"
          className="mb-5 h-2/3 w-4/5 border-2 border-black pl-2"
          defaultValue={todo.desc}
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
