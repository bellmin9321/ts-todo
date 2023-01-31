import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../recoil';
import { Input } from '../Input';

const TodoList: FC = () => {
  const [todoList, setTodoList] = useRecoilState<string[]>(todoListState);
  const [doneList, setDoneList] = useState<string[]>([]);

  const handleDelete = (array: string[], index: number): void => {
    const filtered = array.filter(value => value !== array[index]);
    array === todoList
      ? setTodoList([...filtered])
      : setDoneList([...filtered]);
  };

  const handleDone = (index: number) => {
    const copiedList = [...todoList];
    doneList.push(copiedList.splice(index, 1)[0]);
    setTodoList([...copiedList]);
    setDoneList([...doneList]);
  };

  return (
    <section className="m-0 flex h-screen flex-row bg-sky-300 font-bold">
      <ul className="flex h-2/3 w-1/2 flex-col items-center justify-center border-r border-inherit bg-white">
        <div className="h-1/8 w-full bg-blue-600 text-white">TODO</div>
        <div className="my-5 mx-3 flex h-full w-4/5 flex-col justify-center">
          {todoList.map((todo: string, i: number) => {
            return (
              <div key={uuidv4()}>
                <div className="flex  justify-between ">
                  <span className="mb-2">
                    <Input
                      type="checkbox"
                      className="mr-2"
                      onClick={() => handleDone(i)}
                    />
                    <li className="inline-block hover:cursor-pointer">
                      {todo}
                    </li>
                  </span>
                  <span>
                    <button onClick={() => handleDelete(todoList, i)}>
                      ❌
                    </button>
                  </span>
                </div>
                {i < todoList.length - 1 && <hr className="mb-2" />}
              </div>
            );
          })}
        </div>
      </ul>
      <ul className="flex h-2/3 w-1/2 flex-col items-center justify-center border-r border-inherit bg-white">
        <div className="h-1/8 w-full bg-red-600 text-white">DONE</div>
        <div className="my-5 mx-3 flex h-full w-4/5 flex-col justify-center">
          {doneList.map((done: string, i: number) => {
            return (
              <div key={uuidv4()}>
                <div className="flex  justify-between ">
                  <span className="mb-2">
                    <li className="inline-block">{done}</li>
                  </span>
                  <span>
                    <button onClick={() => handleDelete(doneList, i)}>
                      🗑️
                    </button>
                  </span>
                </div>
                {i < doneList.length - 1 && <hr className="mb-2" />}
              </div>
            );
          })}
        </div>
      </ul>
    </section>
  );
};

export default TodoList;
