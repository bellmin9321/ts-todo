import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { doneListState, todoListState } from '../../recoil';
import { Input } from '../Input';
import Modal from '../Modal';
import useTodo from '../../hooks/useTodo';

const TodoList: FC = () => {
  const {
    deleteTodo,
    checkTodo,
    showTodoDetail,
    todo,
    isOpenModal,
    setOpenModal,
  } = useTodo();
  const todoList = useRecoilValue(todoListState);
  const doneList = useRecoilValue(doneListState);

  return (
    <section className="m-0 flex h-screen flex-row bg-sky-300 font-bold">
      <ul className="flex h-2/3 w-1/2 flex-col items-center justify-center border-r border-inherit bg-white">
        <div className="h-1/8 w-full bg-blue-600 text-white">TODO</div>
        <div className="my-5 mx-3 flex h-full w-2/3 flex-col justify-center">
          {todoList.map((todo, i) => {
            const { id, title, status } = todo;
            return (
              <div key={id}>
                <div className="flex justify-between ">
                  <span className="mb-2">
                    <Input
                      type="checkbox"
                      className="mr-2"
                      onClick={() => checkTodo(id, status)}
                    />
                    <li
                      className="inline-block hover:cursor-pointer"
                      onClick={() => showTodoDetail(todo)}
                    >
                      {title}
                    </li>
                  </span>
                  <span>
                    <button onClick={() => deleteTodo(i)}>❌</button>
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
          {doneList.map((done, i) => {
            const { id, title, status } = done;
            return (
              <div key={id}>
                <div className="flex  justify-between ">
                  <span className="mb-2">
                    <Input
                      type="checkbox"
                      className="mr-2"
                      onClick={() => checkTodo(id, status)}
                      defaultChecked={true}
                    />
                    <li className="inline-block">{title}</li>
                  </span>
                  <span>
                    <button onClick={() => deleteTodo(i)}>🗑️</button>
                  </span>
                </div>
                {i < doneList.length - 1 && <hr className="mb-2" />}
              </div>
            );
          })}
        </div>
      </ul>
      {isOpenModal && <Modal todo={todo} handleModal={setOpenModal} />}
    </section>
  );
};

export default TodoList;
