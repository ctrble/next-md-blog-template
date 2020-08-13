import React from 'react';
import useSWR from 'swr';

import { directoryContent } from 'src/lib/getContent';

import SiteLayout from 'src/components/layouts/SiteLayout';
import Excerpt from 'src/components/post/Excerpt';

const fetcher = async (url) => fetch(url).then((res) => res.json());

const Home = ({ posts }) => {
  const { data, error } = useSWR('/api/posts', fetcher);
  console.log(data);

  return (
    <>
      {posts.map(({ frontmatter, slug, content }) => (
        <Excerpt
          key={slug}
          title={frontmatter.title}
          date={frontmatter.date}
          description={frontmatter.description}
          slug={slug}
          content={content}
        />
      ))}
    </>
  );
};

export async function getStaticProps() {
  const posts = directoryContent('posts');
  console.log('hello');

  return {
    props: {
      posts,
    },
  };
}

Home.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default Home;
