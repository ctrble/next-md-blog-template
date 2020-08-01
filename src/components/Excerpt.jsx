import React from 'react';
import Link from 'next/link';

import styles from './Excerpt.module.scss';

const Excerpt = ({ title, date, description, slug, content }) => (
  <section className={styles.excerpt}>
    <article key={title}>
      <header className={styles.header}>
        <h3>{title}</h3>
        <span>{date}</span>
        <p>{description}</p>
      </header>
    </article>

    <Link href={'/posts/[slug]'} as={`/posts/${slug}`}>
      <a className={styles.link}>Read Post</a>
    </Link>
  </section>
);

export default Excerpt;
