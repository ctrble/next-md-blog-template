import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import { fileContent, directoryContent, slugs } from 'src/lib/getContent';

import SiteLayout from 'src/components/layouts/SiteLayout';
import PostLayout from 'src/components/layouts/PostLayout';
import PostsNav from 'src/components/PostsNav';

const Slug = ({ post, posts }) => {
  return (
    <>
      <PostsNav posts={posts} />
      <article key={post.frontmatter.title}>
        <header>
          <h3>{post.frontmatter.title}</h3>
          <span>{post.frontmatter.date}</span>
        </header>
        <section>
          <p>{post.frontmatter.description}</p>
        </section>
        <ReactMarkdown escapeHtml={false} source={post.content} />
      </article>
    </>
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
  const posts = directoryContent('posts');

  return {
    props: {
      post,
      posts,
    },
  };
}

Slug.getLayout = (page, posts, test) => (
  <SiteLayout>
    <PostLayout>{page}</PostLayout>
  </SiteLayout>
);

export default Slug;
