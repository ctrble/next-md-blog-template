import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

const Header = ({ title, date }) => (
  <header className={styles.header}>
    <h3 className={styles.header__title}>{title}</h3>
    <span className={styles.header__date}>{date}</span>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Header;
