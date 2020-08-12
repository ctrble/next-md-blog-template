import React from 'react';
import Link from 'next/link';

import Search from 'src/components/Search';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/about">
        <a className={styles.link}>About</a>
      </Link>
    </nav>
    <Search />
  </header>
);

export default Header;
