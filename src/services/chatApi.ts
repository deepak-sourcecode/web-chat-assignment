import dayjs from 'dayjs';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IChatItem, IMessageItem } from '../types/api/chat';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://66fa975cafc569e13a9c5621.mockapi.io/api',
});

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery,
  tagTypes: ['Chats', 'Messages'],
  endpoints: (builder) => ({
    getChats: builder.query<IChatItem[], void>({
      query: () => `/chats`,
      providesTags: ['Chats'],
    }),
    getMessages: builder.query<IMessageItem[], number>({
      query: () => `/messages`,
      providesTags: ['Messages'],
      transformResponse: (response: IMessageItem[], _, threshold) =>
        response
          .sort((a, b) => {
            const dateA = dayjs(a.timestamp);
            const dateB = dayjs(b.timestamp);

            if (dateA.isBefore(dateB)) {
              return -1;
            } else if (dateA.isAfter(dateB)) {
              return 1;
            } else {
              return 0;
            }
          })
          .slice(0, threshold),
    }),
  }),
});

export const { useGetChatsQuery, useGetMessagesQuery } = chatApi;
