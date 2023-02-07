import { Draggable } from 'react-beautiful-dnd';

import useTodo from '../../../hooks/useTodo';
import { ListItemProps } from '../../../types';
import { Input } from '../../Input';

const ListItem = ({ state, item, index }: ListItemProps) => {
  const { deleteTodo, checkTodo, showTodoDetail } = useTodo();
  const { id, title, status } = item;

  return (
    <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          key={id}
          className="todo-item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="listItem">
            <span>
              <Input
                type="checkbox"
                className="mr-2"
                onClick={() => checkTodo(id, status)}
                defaultChecked={state === 'DONE' ?? false}
              />
              <li
                className={`inline-block hover:cursor-pointer ${
                  state === 'DONE' ? 'line-through' : null
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
        </div>
      )}
    </Draggable>
  );
};

export default ListItem;
