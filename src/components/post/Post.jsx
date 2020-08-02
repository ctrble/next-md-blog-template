import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';

import Header from './Header';
import Body from './Body';

import styles from './Post.module.scss';

const Post = ({ title, date, description, content }) => (
  <article key={title} className={styles.post}>
    <Header title={title} date={date} />

    <blockquote className={styles.post__description}>{description}</blockquote>

    <Body>
      <ReactMarkdown escapeHtml={false} source={content} />
    </Body>
  </article>
);

export default Post;
