import React from 'react';
import Header from '../Header';

import styles from './SiteLayout.module.scss';

const SiteLayout = ({ children }) => (
  <div className={styles.stretch}>
    <Header />
    <main className={styles.layout}>
      <section className={styles.content}>{children}</section>
    </main>
  </div>
);

export default SiteLayout;
