import { ADD_CONTACT, DELETE_CONTACT } from './types';

const initialStore = [
  {
    id: '1',
    name: 'Vlad',
    number: '123123123',
    gender: 'unknown',
    adult: true,
  },
  {
    id: '2',
    name: 'Sergey',
    number: '456456456',
    gender: 'male',
    adult: true,
  },
];
const reducer = (store = initialStore, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CONTACT:
      return [...store, payload];
    //   case DELETE_CONTACT:
    //     return store.map => {}
    default:
      return store;
  }
};
export default reducer;
