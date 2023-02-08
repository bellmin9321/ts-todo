import { memo } from 'react';
import { ListProps } from '../../types';
import StrictModeDroppable from './StrictModeDroppable';

const List = ({ columnId, column, index, children }: ListProps) => {
  return (
    <StrictModeDroppable droppableId={columnId} key={index}>
      {provided => (
        <div className="flex h-2/3 w-1/2 flex-col items-center justify-center border-r border-inherit bg-white">
          <div
            className={`h-1/8 w-full  text-white ${
              column.status === 'done' ? 'bg-red-600' : 'bg-blue-600'
            }`}
          >
            {column.status.toUpperCase()}
          </div>
          <ul
            className="ul"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {children}
            {provided.placeholder}
          </ul>
        </div>
      )}
    </StrictModeDroppable>
  );
};

export default memo(List);
