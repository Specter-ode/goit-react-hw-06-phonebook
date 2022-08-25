import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACTS } from './contacts-types';
import { nanoid } from 'nanoid';

export const addContact = formData => {
  return {
    type: ADD_CONTACT,
    payload: { ...formData, id: nanoid() },
  };
};

export const deleteContact = contactId => {
  return {
    type: DELETE_CONTACT,
    payload: contactId,
  };
};

export const filterChange = filterValue => {
  return {
    type: FILTER_CONTACTS,
    payload: filterValue,
  };
};
