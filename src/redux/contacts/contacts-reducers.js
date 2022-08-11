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

const errorReducer = createReducer('', {
  [getUsers.rejected]: (_, { payload }) => payload,
  [addUser.rejected]: (_, { payload }) => payload,
  [deleteUser.rejected]: (_, { payload }) => payload,
  [getUsers.pending]: () => '',
  [addUser.pending]: () => '',
  [deleteUser.pending]: () => '',
});

const loadingReducer = createReducer(false, {
  [getUsers.pending]: () => true,
  [getUsers.fulfilled]: () => false,
  [getUsers.rejected]: () => false,
  [addUser.pending]: () => true,
  [addUser.fulfilled]: () => false,
  [addUser.rejected]: () => false,
  [deleteUser.pending]: () => true,
  [deleteUser.fulfilled]: () => false,
  [deleteUser.rejected]: () => false,
});

export const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
  error: errorReducer,
  isLoading: loadingReducer,
});

// import { useState } from 'react';

// export const useLocalStorage = (keyName, defaultValue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     try {
//       const value = window.localStorage.getItem(keyName);

//       if (value) {
//         return JSON.parse(value);
//       } else {
//         window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
//         return defaultValue;
//       }
//     } catch (err) {
//       return defaultValue;
//     }
//   });

//   const setValue = newValue => {
//     try {
//       window.localStorage.setItem(keyName, JSON.stringify(newValue));
//     } catch (err) {}
//     setStoredValue(newValue);
//   };

//   return [storedValue, setValue];
// };};

//   return [storedValue, setValue];
// };
