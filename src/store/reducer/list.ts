import { createReducer } from '@reduxjs/toolkit';
import { addList, deleteList } from '../actions/listActions';

const intialState = {
  lists: [],
};
const listReducer = createReducer(intialState, (builder) => {
  builder
    .addCase(addList, (state, action) => {
      state.lists.push(action.payload);
    })
    .addCase(deleteList, (state, action) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload.id);
    });
});
export default listReducer;
