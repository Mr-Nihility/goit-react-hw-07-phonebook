import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, deleteContact } from 'services/api';
//-------------------------------------------------------------//
export const getUsers = createAsyncThunk('contacts/get', async () => {
  try {
    return await getContacts();
  } catch (error) {
    return error.message;
  }
});
export const addUser = createAsyncThunk('contacts/add', async contact => {
  try {
    await postContact(contact);
    return await getContacts();
  } catch (error) {
    return error.message;
  }
});

export const deleteUser = createAsyncThunk('contacts/delete', async id => {
  try {
    await deleteContact(id);
    return await getContacts();
  } catch (error) {
    return error.message;
  }
});

export const filterUser = createAction('contacts/filter');
