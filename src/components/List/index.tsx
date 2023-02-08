import { memo } from 'react';
import { ListProps } from '../../types';
import StrictModeDroppable from './StrictModeDroppable';

const List = ({ columnId, column, index, children }: ListProps) => {
  const getTitleColor = (status: string) => {
    switch (status) {
      case 'in-progress':
        return 'bg-green-600';
      case 'done':
        return 'bg-red-600';
      default:
        return 'bg-blue-600';
    }
  };

  return (
    <StrictModeDroppable droppableId={columnId} key={index}>
      {provided => (
        <div className="flex h-2/3 w-1/2 flex-col items-center justify-center border-r border-inherit bg-white">
          <div
            className={`h-1/8 w-full  text-white ${getTitleColor(
              column.status,
            )}`}
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
