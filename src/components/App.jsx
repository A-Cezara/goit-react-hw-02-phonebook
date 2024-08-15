import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


export default function App() {
const [contacts, setContacts] = useState([
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]);
const [filter, setFilter] = useState('');


useEffect(() => {
  const storedContacts = JSON.parse(localStorage.getItem('contacts'));
 
  if (storedContacts) {
    setContacts(storedContacts);
  }
}, [])

useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts])


function handleAddContact (name, number) {
  if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
    alert('Contact already exists!');
    return;
  }
  const newContact = {
    id: nanoid(),
    name,
    number,
  };
  setContacts(prevContacts => [...prevContacts, newContact]);
};

function handleFilterChange(event) {
  setFilter(event.target.value);
};

function handleDeleteContact(id) {
  setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
};
function getFilteredContacts() {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
}

  const filteredContacts = getFilteredContacts();


  return (
      <div className='main'>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={handleFilterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      </div>
    
  );
}




 

 

