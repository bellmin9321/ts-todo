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

    const [[columnId, column]] = Object.entries(columns).filter(
      ([, obj]) => obj.status === 'todo',
    );

    setTodoList([...tempList]);
    setColumns({
      ...columns,
      [columnId]: { ...column, items: [...tempList] },
    });
    setOpenModal(false);
  };

  const checkTodo = (columnId: string, id: number): void => {
    const sorceColumn = columns[columnId];

    const tempList = [...sorceColumn.items];
    const targetIndex = tempList.findIndex(target => target.id === id);
    const checkedTodo = tempList.splice(targetIndex, 1)[0];

    const [[destinationId, column]] = Object.entries(columns).filter(
      ([, obj]) =>
        obj.status === (sorceColumn.status === 'todo' ? 'done' : 'todo'),
    );

    setColumns({
      ...columns,
      [columnId]: { ...sorceColumn, items: [...tempList] },
      [destinationId]: { ...column, items: [...column.items, checkedTodo] },
    });
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
