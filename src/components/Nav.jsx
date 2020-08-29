import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import useSWR from 'swr';

import styles from './Nav.module.scss';

const fetcher = async (url) => fetch(url).then((res) => res.json());

const Nav = ({ count }) => {
  const { data, error } = useSWR('/api/posts', fetcher);

  if (error) return <div className={styles.nav}>failed to load</div>;
  if (!data) return <div className={styles.nav}>loading...</div>;

  return (
    <div className={styles.nav}>
      Latest Posts:
      <ul className={styles.list}>
        {data.slice(0, count).map(({ slug, frontmatter }) => (
          <li key={slug} className={styles.item}>
            <Link href="/posts/[slug]" as={`/posts/${slug}`}>
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

Nav.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Nav;
