import { Avatar, Typography } from 'antd';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { useGetChatsQuery } from '../../services/chatApi';
import { selectActiveChatId, setActiveChatId } from '../../slices/applicationSlice';
import { twclsx } from '../../utils';

const Chats = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetChatsQuery();

  const activeChatId = useAppSelector(selectActiveChatId);

  return (
    <aside className="w-72 overflow-y-auto scroll-smooth bg-slate-100">
      {data?.map(({ name, lastMessage, id }) => (
        <div
          onClick={() => dispatch(setActiveChatId(id))}
          key={id}
          className={twclsx(
            'flex w-full cursor-pointer gap-3 px-2 py-3 transition-all',
            `${activeChatId === id && 'bg-slate-400'}`,
          )}
        >
          <div>
            <Avatar className="h-10 w-10 bg-gray-900 font-medium">{name.charAt(0).toUpperCase()}</Avatar>
          </div>
          <div className="flex min-w-0 flex-grow flex-col">
            <Typography className="text-md font-bold text-gray-900">{name}</Typography>
            <Typography className="overflow-hidden text-ellipsis text-nowrap text-gray-600">{lastMessage}</Typography>
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Chats;
