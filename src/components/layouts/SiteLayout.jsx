import React from 'react';
import Header from '../Header';

import styles from './SiteLayout.module.scss';

const SiteLayout = ({ children }) => (
  <>
    <Header />
    <main className={styles.layout}>
      <section className={styles.content}>{children}</section>
    </main>
  </>
);

export default SiteLayout;
