import React from 'react';

import styles from './Header.module.scss';

const Header = ({ title, date }) => (
  <header className={styles.header}>
    <h3 className={styles.header__title}>{title}</h3>
    <span className={styles.header__date}>{date}</span>
  </header>
);

export default Header;
