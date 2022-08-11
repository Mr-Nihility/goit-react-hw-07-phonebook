import axios from 'axios';
//--------------------------------------------------------------------------------------------//
const BASE_URL = 'https://62f0a99b57311485d1342b64.mockapi.io/dz';
const mockapi = axios.create({ baseURL: BASE_URL });

export const getContacts = async () => {
  try {
    const { data } = await mockapi.get('/contacts');
    return data;
  } catch (error) {
    return error.message;
  }
};

export const postContact = async contact => {
  try {
    const { data } = await mockapi.post('/contacts', { ...contact });
    console.log('додав контакт', data);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const deleteContact = async id => {
  try {
    const { data } = await mockapi.delete(`/contacts/${id}`);
    console.log('видаляю контакт', data);
    return data;
  } catch (error) {
    return error.message;
  }
};
