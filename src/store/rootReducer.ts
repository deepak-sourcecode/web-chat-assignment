import { combineReducers } from '@reduxjs/toolkit';

import { chatApi } from '../services/chatApi';
import applicationReducer from '../slices/applicationSlice';

const rootReducer = combineReducers({
  application: applicationReducer,
  [chatApi.reducerPath]: chatApi.reducer,
});

export default rootReducer;
