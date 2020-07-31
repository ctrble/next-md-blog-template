import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import { fileContent, slugs } from '../../lib/getContent';

import Header from '../../components/Header';

const Slug = ({ post }) => {
  return (
    <article key={post.frontmatter.title}>
      <header>
        <h3>{post.frontmatter.title}</h3>
        <span>{post.frontmatter.date}</span>
      </header>
      <section>
        <p>{post.frontmatter.description}</p>
      </section>
      <ReactMarkdown escapeHtml={false} source={post.content} />
      <Header />
    </article>
  );
};

export async function getStaticPaths() {
  const paths = slugs('posts');

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const post = fileContent('posts', `${slug}.md`);

  return {
    props: {
      post,
    },
  };
}

export default Slug;
