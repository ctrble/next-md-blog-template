import React from 'react';
import Header from '../Header';

import styles from './SiteLayout.module.scss';

const SiteLayout = ({ children }) => (
  <>
    <Header />
    <main className={styles.layout}>{children}</main>
  </>
);

export default SiteLayout;
