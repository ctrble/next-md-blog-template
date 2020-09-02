import React from 'react';
import PropTypes from 'prop-types';

import { directoryContent } from 'src/lib/getContent';

import SiteLayout from 'src/components/layouts/SiteLayout';
import Content from 'src/components/content/Content';

const About = ({ about }) => {
  return (
    <div>
      {about.map(({ frontmatter, content }) => (
        <Content
          key={frontmatter.title}
          title={frontmatter.title}
          description={frontmatter.description}
          content={content}
        />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const about = directoryContent('about');

  return {
    props: {
      about,
    },
  };
}

/* eslint-disable react/display-name */
About.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
/* eslint-enable react/display-name */

About.propTypes = {
  about: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ).isRequired,
};

export default About;
