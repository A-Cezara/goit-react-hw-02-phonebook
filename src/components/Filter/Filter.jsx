import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';


const Filter = ({ filter, onFilterChange }) => (
  <input
    type="text"
    className={styles.input}
    value={filter}
    onChange={onFilterChange}
    placeholder="Search contacts"
  />
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;