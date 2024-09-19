import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();

  const handleAddContact = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="main">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
