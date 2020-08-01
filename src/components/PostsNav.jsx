import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const PostsNav = ({ count }) => {
  const { data, error } = useSWR('/api/posts', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      Latest Posts:
      <ul>
        {data.posts.slice(0, count).map(({ slug, frontmatter }) => (
          <li key={slug}>
            <Link href={'/posts/[slug]'} as={`/posts/${slug}`}>
              <a>{frontmatter.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsNav;
