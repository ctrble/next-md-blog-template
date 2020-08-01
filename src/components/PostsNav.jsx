import React from 'react';
import Link from 'next/link';

const PostsNav = ({ posts }) => {
  return (
    <div>
      {posts.map(({ slug, frontmatter }) => (
        <Link key={slug} href={'/posts/[slug]'} as={`/posts/${slug}`}>
          <a>{frontmatter.title}</a>
        </Link>
      ))}
    </div>
  );
};

export default PostsNav;
