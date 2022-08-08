import { addUser, deleteUser, filterUser, getUsers } from './contscts-actions';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
//----------------------------------------------------------------//

const itemReducer = createReducer([], {
  [getUsers.fulfilled]: (_, { payload }) => payload,
  [addUser.fulfilled]: (_, { payload }) => payload,
  [deleteUser.fulfilled]: (_, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [filterUser.type]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
