import React from 'react';
import Link from 'next/link';

const Excerpt = ({ title, date, description, slug, content }) => (
  <section>
    <article key={title}>
      <header>
        <h3>{title}</h3>
        <span>{date}</span>
        <p>{description}</p>
      </header>
    </article>

    <Link href={'/posts/[slug]'} as={`/posts/${slug}`}>
      <a>Read Post</a>
    </Link>
  </section>
);

export default Excerpt;
