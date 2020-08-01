import React from 'react';

import { directoryContent } from 'src/lib/getContent';

import SiteLayout from 'src/components/layouts/SiteLayout';
import Excerpt from 'src/components/Excerpt';

const Home = ({ posts }) => {
  return (
    <div>
      {posts.map(({ frontmatter, slug, content }) => (
        <Excerpt
          title={frontmatter.title}
          date={frontmatter.date}
          description={frontmatter.description}
          slug={slug}
          content={content}
        />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const posts = directoryContent('posts');

  return {
    props: {
      posts,
    },
  };
}

Home.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default Home;
