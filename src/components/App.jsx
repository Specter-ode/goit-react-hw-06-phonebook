import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, filterChange } from '../redux/contacts/contacts-actions';

import Container from './Container/Container';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const items = useSelector(store => store.contacts.items);
  const filterValue = useSelector(store => store.contacts.filter);
  const dispatch = useDispatch();

  const onAddContact = newContactData => {
    const { name } = newContactData;
    if (
      items.find(
        contactFromPhonebook => contactFromPhonebook.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    } else if (name === '') {
      alert('Please enter your name');
      return;
    }
    const action = addContact(newContactData);
    dispatch(action);
  };

  const onDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const changeFilter = e => {
    const action = filterChange(e.target.value);
    dispatch(action);
  };

  const getVisibleContacts = () => {
    if (filterValue) {
      return items.filter(contact => contact.name.toLowerCase().includes(filterValue));
    }
    return items;
  };

  return (
    <div>
      <Container>
        <Section title="Phonebook">
          <ContactForm catchSubmitInfo={onAddContact} />
        </Section>
        <Section title="Contacts">
          {items ? (
            <>
              <Filter catchFilterInfo={changeFilter} />
              <ContactList contacts={getVisibleContacts()} removeContact={onDeleteContact} />
            </>
          ) : (
            <p>No contacts in phonebook</p>
          )}
        </Section>
      </Container>
    </div>
  );
};
export default App;
