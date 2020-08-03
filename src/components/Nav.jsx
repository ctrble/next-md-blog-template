import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

import styles from './Nav.module.scss';

const Nav = ({ count }) => {
  const { data, error } = useSWR('/api/posts', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className={styles.nav}>
      Latest Posts:
      <ul className={styles.list}>
        {data.posts.slice(0, count).map(({ slug, frontmatter }) => (
          <li key={slug} className={styles.item}>
            <Link href={'/posts/[slug]'} as={`/posts/${slug}`}>
              <a className={styles.link}>
                {frontmatter.title}, {frontmatter.date}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
