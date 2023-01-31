import { ListProps } from '../../types';
import { Input } from '../Input';

const List = ({
  state,
  list,
  onCheckTodo,
  onShowTodoDetail,
  onDeleteTodo,
}: ListProps) => {
  return (
    <ul className="flex h-2/3 w-1/2 flex-col items-center justify-center border-r border-inherit bg-white">
      <div
        className={`h-1/8  + w-full  text-white ${
          state === 'DONE' ? 'bg-red-600' : 'bg-blue-600'
        }`}
      >
        {state}
      </div>
      <div className="my-5 mx-3 flex h-full w-2/3 flex-col justify-center">
        {list.map((item, i) => {
          const { id, title, status } = item;
          return (
            <div key={id}>
              <div className="flex justify-between ">
                <span className="mb-2">
                  <Input
                    type="checkbox"
                    className="mr-2"
                    onClick={() => onCheckTodo(id, status)}
                    defaultChecked={state === 'DONE' ?? false}
                  />
                  <li
                    className="inline-block hover:cursor-pointer"
                    onClick={() => onShowTodoDetail(item)}
                  >
                    {title}
                  </li>
                </span>
                <span>
                  <button onClick={() => onDeleteTodo(id)}>❌</button>
                </span>
              </div>
              {i < list.length - 1 && <hr className="mb-2" />}
            </div>
          );
        })}
      </div>
    </ul>
  );
};

export default List;
