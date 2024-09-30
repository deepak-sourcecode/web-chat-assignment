import { Empty, Typography } from 'antd';
import dayjs from 'dayjs';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { useGetMessagesQuery } from '../../services/chatApi';
import { incrementThreshold, selectActiveChatId, selectThreshold } from '../../slices/applicationSlice';
import { twclsx } from '../../utils';

const Conversation = () => {
  const dispatch = useAppDispatch();
  const threshold = useAppSelector(selectThreshold);
  const activeChatId = useAppSelector(selectActiveChatId);
  const { data } = useGetMessagesQuery(threshold);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(incrementThreshold());
    }, 2000);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [dispatch]);

  return (
    <section className="flex min-w-0 flex-grow flex-col gap-1.5 overflow-y-auto rounded-md bg-slate-200 p-4">
      {activeChatId.length ? (
        <div className="flex flex-col gap-1.5">
          {data?.map(({ message, isHostMessage, timestamp }) => (
            <div className={twclsx(`flex gap-2 ${isHostMessage ? 'justify-start' : 'justify-end'}`)}>
              <Typography className="w-fit rounded-lg bg-white px-4 py-2 pb-2.5 text-gray-700">
                <Typography className="text-xs font-bold text-gray-950">{isHostMessage ? 'You' : 'Support'}</Typography>
                {message}
                <Typography className={twclsx(`text-xs text-gray-400 ${isHostMessage ? 'text-left' : 'text-right'}`)}>
                  {dayjs(timestamp).format('hh:mm A')}
                </Typography>
              </Typography>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">
          <Empty />
        </div>
      )}
    </section>
  );
};

export default Conversation;
