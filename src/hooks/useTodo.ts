import { useRecoilState, useSetRecoilState } from 'recoil';
import { todoListState, modalState, todoState, columnsState } from '../recoil';
import { TodoListType } from '../types';

const useTodo = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [columns, setColumns] = useRecoilState(columnsState);
  const [todo, setTodo] = useRecoilState(todoState);
  const setOpenModal = useSetRecoilState(modalState);

  const deleteTodo = (id: number): void => {
    const tempList = [...todoList];
    const targetIndex = tempList.findIndex(target => target.id === id);
    tempList.splice(targetIndex, 1);

    const [[columnId, column]] = Object.entries(columns).filter(
      ([, obj]) => obj.status === 'todo',
    );

    setTodoList([...tempList]);
    setColumns({
      ...columns,
      [columnId]: { ...column, items: [...tempList] },
    });
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

  const checkTodo = (id: number, state: string): void => {
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
