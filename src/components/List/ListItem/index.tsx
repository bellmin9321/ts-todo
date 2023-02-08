import { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import useTodo from '../../../hooks/useTodo';
import { ListItemProps } from '../../../types';
import { Input } from '../../Input';

const ListItem = ({ state, item, index }: ListItemProps) => {
  const { deleteTodo, checkTodo, showTodoDetail } = useTodo();
  const { id, title } = item;

  return (
    <Draggable key={id} draggableId={String(id)} index={index}>
      {provided => (
        <div
          className="listItem"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <span>
            <Input
              type="checkbox"
              className="mr-2"
              onClick={() => checkTodo(id, state)}
              defaultChecked={state === 'done' ?? false}
            />
            <li
              className={`inline-block hover:cursor-pointer ${
                state === 'done' ? 'line-through' : null
              }`}
              onClick={() => showTodoDetail(item)}
            >
              {title}
            </li>
          </span>
          <span>
            <button onClick={() => deleteTodo(id)}>❌</button>
          </span>
        </div>
      )}
    </Draggable>
  );
};

export default memo(ListItem);
