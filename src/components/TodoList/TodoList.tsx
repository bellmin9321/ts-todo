import { FC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { doneListState, modalState, todoListState } from '../../recoil';
import Modal from '../Modal';
import useTodo from '../../hooks/useTodo';
import List from '../List';
import TodoDetail from '../TodoDetail.tsx';

const TodoList: FC = () => {
  const { deleteTodo, checkTodo, showTodoDetail, todo } = useTodo();
  const [isOpenModal, setOpenModal] = useRecoilState(modalState);
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
      {isOpenModal && (
        <Modal
          component={<TodoDetail todo={todo} />}
          handleModal={setOpenModal}
        />
      )}
    </section>
  );
};

export default TodoList;
