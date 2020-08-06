import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

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

About.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default About;
