import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import { fileContent, slugs } from 'src/lib/getContent';

import SiteLayout from 'src/components/layouts/SiteLayout';
import PostLayout from 'src/components/layouts/PostLayout';
import Post from 'src/components/post/Post';

const Slug = ({ post }) => {
  return (
    <Post
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      description={post.frontmatter.description}
      content={post.content}
    />
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

Slug.getLayout = (page, posts, test) => (
  <SiteLayout>
    <PostLayout>{page}</PostLayout>
  </SiteLayout>
);

export default Slug;
