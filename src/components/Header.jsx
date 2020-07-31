import React from 'react';
import Link from 'next/link';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <Link href={'/'}>
      <a>Home</a>
    </Link>
  </header>
);

export default Header;
