import React from 'react';
import PropTypes from 'prop-types';
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

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteLayout;
