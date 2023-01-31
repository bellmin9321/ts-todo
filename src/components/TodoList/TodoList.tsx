import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { doneListState, todoListState } from '../../recoil';
import { Input } from '../Input';
import Modal from '../Modal';
import useTodo from '../../hooks/useTodo';
import List from '../List';

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
      <List
        state={'TODO'}
        list={todoList}
        onCheckTodo={checkTodo}
        onShowTodoDetail={showTodoDetail}
        onDeleteTodo={deleteTodo}
      />
      <List
        state={'DONE'}
        list={doneList}
        onCheckTodo={checkTodo}
        onShowTodoDetail={showTodoDetail}
        onDeleteTodo={deleteTodo}
      />
      {isOpenModal && <Modal todo={todo} handleModal={setOpenModal} />}
    </section>
  );
};

export default TodoList;
