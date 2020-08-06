import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';

import styles from './Search.module.scss';

export default function Search() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query) => `/api/search?q=${query}`;

  const onChange = useCallback((event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.results);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener('click', onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener('click', onClick);
    }
  }, []);

  return (
    <div ref={searchRef} className={styles.search}>
      <input
        type="text"
        placeholder="Search posts"
        className={styles.input}
        value={query}
        onChange={onChange}
        onFocus={onFocus}
      />
      {active && results.length > 0 && (
        <ul className={styles.results}>
          {results.map(({ slug, frontmatter }) => (
            <li key={slug}>
              <Link href="/posts/[slug]" as={`/posts/${slug}`}>
                <a>{frontmatter.title}</a>
              </Link>
              {frontmatter.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
