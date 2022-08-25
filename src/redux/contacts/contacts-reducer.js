import { ADD_CONTACT, DELETE_CONTACT, FILTER_CONTACTS } from './contacts-types';
import { combineReducers } from 'redux';

const itemsInitialStore = [];
const itemsReducer = (store = itemsInitialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CONTACT:
      return [...store, payload];
    case DELETE_CONTACT:
      return store.filter(contact => contact.id !== payload);
    default:
      return store;
  }
};

const filterInitialStore = '';

const filterReducer = (store = filterInitialStore, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_CONTACTS:
      return payload.toLowerCase().trim();
    default:
      return store;
  }
};

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
