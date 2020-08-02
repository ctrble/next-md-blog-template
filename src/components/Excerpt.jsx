import React from 'react';
import Link from 'next/link';

import styles from './Excerpt.module.scss';

const Excerpt = ({ title, date, description, slug, content }) => (
  <section key={title} className={styles.excerpt}>
    <article>
      <header className={styles.header}>
        <h3 className={styles.header__title}>{title}</h3>
        <span className={styles.header__date}>{date}</span>
      </header>

      <p className={styles.body}>{description}</p>

      <footer className={styles.footer}>
        <Link href={'/posts/[slug]'} as={`/posts/${slug}`}>
          <a className={styles.footer__link}>Read Post</a>
        </Link>
      </footer>
    </article>
  </section>
);

export default Excerpt;
