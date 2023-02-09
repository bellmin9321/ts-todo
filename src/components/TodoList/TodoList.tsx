import { memo } from 'react';
import { useRecoilState } from 'recoil';
import { modalState, columnsState } from '../../recoil';
import Modal from '../Modal';
import TodoDetail from '../TodoDetail.tsx';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { TodoListType } from '../../types';
import List from '../List';
import ListItem from '../List/ListItem';

const TodoList = () => {
  const [columns, setColumns] = useRecoilState(columnsState);

  const [isOpenModal, setOpenModal] = useRecoilState(modalState);

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
        {Object.entries(columns).map(([columnId, column], i) => (
          <List columnId={columnId} column={column} index={i}>
            {column.items.map((item: TodoListType, index: number) => (
              <ListItem
                columnId={columnId}
                state={column.status}
                item={item}
                index={index}
              />
            ))}
          </List>
        ))}
      </DragDropContext>
      {isOpenModal && (
        <Modal component={<TodoDetail />} handleModal={setOpenModal} />
      )}
    </section>
  );
};

export default memo(TodoList);
