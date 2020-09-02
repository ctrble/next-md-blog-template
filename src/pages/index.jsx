import React from 'react';
import PropTypes from 'prop-types';

import { directoryContent } from 'src/lib/getContent';

import SiteLayout from 'src/components/layouts/SiteLayout';
import Excerpt from 'src/components/post/Excerpt';

const Home = ({ posts }) => (
  <>
    {posts.map(({ frontmatter, slug }) => (
      <Excerpt
        key={slug}
        title={frontmatter.title}
        date={frontmatter.date}
        description={frontmatter.description}
        slug={slug}
      />
    ))}
  </>
);

export async function getStaticProps() {
  const posts = directoryContent('posts');

  return {
    props: {
      posts,
    },
  };
}

/* eslint-disable react/display-name */
Home.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
/* eslint-enable react/display-name */

Home.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ).isRequired,
};

export default Home;
