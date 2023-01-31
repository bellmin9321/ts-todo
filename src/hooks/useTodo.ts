import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';
import { listState } from '../recoil';
import { TodoListType } from '../types';

const useTodo = () => {
  const [todoList, setTodoList] = useRecoilState<TodoListType[]>(listState);
  const [todo, setTodo] = useState<TodoListType>({
    id: '',
    title: '',
    desc: '',
    status: '',
  });
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const deleteTodo = (id: string): void => {
    const tempList = [...todoList];
    const targetIndex = tempList.findIndex(target => target.id === id);
    tempList.splice(targetIndex, 1);

    setTodoList([...tempList]);
  };

  const checkTodo = (id: string, state: string): void => {
    const tempList = [...todoList];
    const targetIndex = tempList.findIndex(target => target.id === id);

    const tempTarget = {
      ...tempList[targetIndex],
      status: state === 'todo' ? 'done' : 'todo',
    };
    tempList.splice(targetIndex, 1, tempTarget);

    setTodoList([...tempList]);
  };

  const showTodoDetail = useCallback(
    (item: TodoListType) => {
      setTodo(item);
      setOpenModal(true);
    },
    [isOpenModal],
  );

  return {
    deleteTodo,
    checkTodo,
    showTodoDetail,
    todo,
    isOpenModal,
    setOpenModal,
  };
};

export default useTodo;
