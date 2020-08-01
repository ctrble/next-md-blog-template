import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

const Post = ({ title, date, description, content }) => (
  <article key={title}>
    <header>
      <h3>{title}</h3>
      <span>{date}</span>
      <p>{description}</p>
    </header>

    <ReactMarkdown escapeHtml={false} source={content} />
  </article>
);

export default Post;
