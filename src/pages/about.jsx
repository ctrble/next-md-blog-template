import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import { directoryContent } from 'src/lib/getContent';

import SiteLayout from 'src/components/layouts/SiteLayout';

const About = ({ about }) => {
  return (
    <div>
      {about.map(({ frontmatter, content }) => (
        <article key={frontmatter.title}>
          <header>
            <h3>{frontmatter.title}</h3>
          </header>
          <ReactMarkdown escapeHtml={false} source={content} />
        </article>
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
