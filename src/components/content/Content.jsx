import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

import styles from './Content.module.scss';

const Content = ({ title, description, content }) => (
  <article key={title} className={styles.content}>
    <header className={styles.header}>
      <h3>{title}</h3>
    </header>

    <p className={styles.description}>{description}</p>

    <div className={styles.body}>
      <ReactMarkdown escapeHtml={false} source={content} />
    </div>
  </article>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Content;
