import { addUser, deleteUser, filterUser } from './contscts-actions';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
//----------------------------------------------------------------//

const itemReducer = createReducer([], {
  [addUser.type]: (state, { payload }) => [...state, payload],
  [deleteUser.type]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [filterUser.type]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
