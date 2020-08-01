import React from 'react';
import Link from 'next/link';

import Search from 'src/components/Search';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <Link href={'/'}>
      <a>Home</a>
    </Link>
    <Search />
  </header>
);

export default Header;
