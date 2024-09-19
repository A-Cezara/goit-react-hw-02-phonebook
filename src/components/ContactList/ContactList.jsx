import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactItem';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(getContacts); // Get contacts from Redux
  const filter = useSelector(getFilter); // Get filter from Redux

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
