import { memo, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  modalState,
  // doneListState,
  // todoListState,
  columnsOfStatus,
} from '../../recoil';
import Modal from '../Modal';
import useTodo from '../../hooks/useTodo';
import TodoDetail from '../TodoDetail.tsx';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { TodoListType, TodoStateType } from '../../types';
import List from '../List';
import ListItem from '../List/ListItem';

const TodoList = () => {
  const { todo, dragTodo } = useTodo();
  const [columns, setColumns] = useState(columnsOfStatus);

  const [isOpenModal, setOpenModal] = useRecoilState(modalState);
  // const todoList = useRecoilValue(todoListState);
  // const doneList = useRecoilValue(doneListState);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <section className="m-0 flex h-screen flex-row bg-sky-300 font-bold">
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([columnId, column]) => (
          <List columnId={columnId} column={column}>
            {column.items.map((item: TodoListType, index: number) => (
              <ListItem state={columnId} item={item} index={index} />
            ))}
          </List>
        ))}
        {/* {stateArray.map((list: TodoStateType) => (
          <List state={list.state}>
            {list.items.map((item: TodoListType, index: number) => (
              <ListItem state={list.state} item={item} index={index} />
            ))}
          </List>
        ))} */}
      </DragDropContext>
      {isOpenModal && (
        <Modal
          component={<TodoDetail todo={todo} />}
          handleModal={setOpenModal}
        />
      )}
    </section>
  );
};
// const TodoList = () => {
//   const { todo, setTodoList } = useTodo();
//   const [isOpenModal, setOpenModal] = useRecoilState(modalState);
//   const todoList = useRecoilValue(todoListState);
//   const doneList = useRecoilValue(doneListState);

//   const stateArray = [
//     { item: todoList, state: 'TODO' },
//     { item: doneList, state: 'DONE' },
//   ];

//   const dropHandler = (result: DropResult) => {
//     const { destination, draggableId } = result;
//     if (!destination?.droppableId) return;

//     const newStatus: string = destination?.droppableId;
//     const todoId: string = draggableId;

//     const tempTodoList = [...todoList];
//     const originTodo = tempTodoList.find(todo => todo.id === todoId);
//     if (!originTodo) return;

//     const originIndex = tempTodoList.indexOf(originTodo);
//     const newTodo = { ...originTodo, ['status']: newStatus };
//     tempTodoList.splice(originIndex, 1, newTodo);
//     setTodoList([...tempTodoList]);
//   };

//   return (
//     <section className="m-0 flex h-screen flex-row bg-sky-300 font-bold">
//       <DragDropContext onDragEnd={dropHandler}>
//         <>
//           {stateArray.map((list: TodoStateType, index) => {
//             return <List list={list.item} state={list.state} key={index} />;
//           })}
//         </>
//       </DragDropContext>
//       {/* <List state={'(TODO)'} list={todoList} />
//       <List state={'DONE'} list={doneList} /> */}
//       {isOpenModal && (
//         <Modal
//           component={<TodoDetail todo={todo} />}
//           handleModal={setOpenModal}
//         />
//       )}
//     </section>
//   );
// };

export default memo(TodoList);
