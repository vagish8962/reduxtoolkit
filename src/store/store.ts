import { configureStore } from '@reduxjs/toolkit';
import listReducer from './reducer/list';

const store = configureStore({
  reducer: {
    lists: listReducer,
  },
});

export default store;
