import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Header from './Header';
import Body from './Body';

import styles from './Excerpt.module.scss';

const Excerpt = ({ title, date, description, slug }) => (
  <article key={title} className={styles.excerpt}>
    <Header title={title} date={date} />

    <Body>
      <p>{description}</p>
    </Body>

    <footer className={styles.footer}>
      <Link href="/posts/[slug]" as={`/posts/${slug}`}>
        <a className={styles.link}>Read Post ➡︎</a>
      </Link>
    </footer>
  </article>
);

Excerpt.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default Excerpt;
