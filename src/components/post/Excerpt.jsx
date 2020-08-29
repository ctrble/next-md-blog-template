import React from 'react';
import Link from 'next/link';

import Header from './Header';
import Body from './Body';

import styles from './Excerpt.module.scss';

const Excerpt = ({ title, date, description, slug, content }) => (
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

export default Excerpt;
