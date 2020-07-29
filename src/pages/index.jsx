import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';
import { directoryContent, fileContent } from '../lib/getContent';

import Test from '../components/Test';

const Home = ({ about, posts, post }) => {
  return (
    <div>
      {about.map(({ frontmatter, content }) => (
        <article key={frontmatter.title}>
          <header>
            <h3>{frontmatter.title}</h3>
            <span>{frontmatter.date}</span>
          </header>
          <section>
            <p>{frontmatter.description}</p>
          </section>
          <ReactMarkdown escapeHtml={false} source={content} />
          <Test />
        </article>
      ))}

      {posts.map(({ slug, frontmatter, content }) => (
        <article key={frontmatter.title}>
          <header>
            <h3>{frontmatter.title}</h3>
            <span>{frontmatter.date}</span>
          </header>
          <section>
            <p>{frontmatter.description}</p>
          </section>
          <Link href={'/posts/[slug]'} as={`/posts/${slug}`}>
            <a>{frontmatter.title}</a>
          </Link>
          <ReactMarkdown escapeHtml={false} source={content} />
          <Test />
        </article>
      ))}

      <article key={post.frontmatter.title}>
        <header>
          <h3>{post.frontmatter.title}</h3>
          <span>{post.frontmatter.date}</span>
        </header>
        <section>
          <p>{post.frontmatter.description}</p>
        </section>
        <ReactMarkdown escapeHtml={false} source={post.content} />
        <Test />
      </article>
    </div>
  );
};

export async function getStaticProps() {
  const about = directoryContent('about');
  const posts = directoryContent('posts');

  const post = fileContent('posts', `init.md`);

  return {
    props: {
      about,
      posts,
      post,
    },
  };
}

export default Home;
