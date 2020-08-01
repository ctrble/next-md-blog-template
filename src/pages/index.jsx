import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import { directoryContent } from 'src/lib/getContent';

import SiteLayout from 'src/components/layouts/SiteLayout';

const Home = ({ about, posts }) => {
  return (
    <div>
      {about.map(({ frontmatter, content }) => (
        <article key={frontmatter.title}>
          <header>
            <h3>{frontmatter.title}</h3>
            <span>{frontmatter.date}</span>
          </header>
          <section>
            <p>{frontmatter.description}</p>
          </section>
          <ReactMarkdown escapeHtml={false} source={content} />
        </article>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const about = directoryContent('about');
  const posts = directoryContent('posts');

  return {
    props: {
      about,
      posts,
    },
  };
}

Home.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default Home;
