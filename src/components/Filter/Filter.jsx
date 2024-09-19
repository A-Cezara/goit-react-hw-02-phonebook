import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <input
      type="text"
      className={styles.input}
      value={filter}
      onChange={handleFilterChange}
      placeholder="Search contacts"
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
