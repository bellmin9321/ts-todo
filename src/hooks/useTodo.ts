import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { listState, modalState } from '../recoil';
import { TodoListType } from '../types';

const useTodo = () => {
  const [todoList, setTodoList] = useRecoilState(listState);
  const setOpenModal = useSetRecoilState(modalState);
  const [todo, setTodo] = useState<TodoListType>({
    id: '',
    title: '',
    desc: '',
    status: '',
  });

  const deleteTodo = (id: string): void => {
    const tempList = [...todoList];
    const targetIndex = tempList.findIndex(target => target.id === id);
    tempList.splice(targetIndex, 1);

    setTodoList([...tempList]);
  };

  const editTodo = (
    editedTodo: TodoListType,
    title: string,
    desc: string,
  ): void => {
    const tempList = [...todoList];
    const targetIndex = tempList.findIndex(item => item.id === editedTodo.id);

    const tempTarget = {
      ...editedTodo,
      title: title ? title : editedTodo.title,
      desc: desc ? desc : editedTodo.desc,
    };
    tempList.splice(targetIndex, 1, tempTarget);

    setTodoList([...tempList]);
    setOpenModal(false);
  };

  const checkTodo = (id: string, state: string): void => {
    const tempList = [...todoList];
    const targetIndex = tempList.findIndex(target => target.id === id);

    const tempTarget = {
      ...tempList[targetIndex],
      status: state === 'todo' ? 'done' : 'todo',
    };
    tempList.splice(targetIndex, 1);

    setTodoList([...tempList, tempTarget]);
  };

  const showTodoDetail = (item: TodoListType) => {
    setTodo(item);
    setOpenModal(true);
  };

  return {
    deleteTodo,
    editTodo,
    checkTodo,
    showTodoDetail,
    todo,
  };
};

export default useTodo;
