import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown/with-html';

import Image from 'src/components/Image';
import Code from 'src/components/Code';
import Header from './Header';
import Body from './Body';

import styles from './Post.module.scss';

const OverrideRenderers = (props) => {
  // disable linters cause this is a dirty hack
  /* eslint-disable react/destructuring-assignment, react/prop-types, react/jsx-props-no-spreading */
  const element = props.children[0];

  // workaround: https://github.com/rexxars/react-markdown/issues/184#issuecomment-522491275
  // images get nested in p tags, which the lazy loader then wraps in a div

  return element.type === 'img' ? (
    <Image key={element.key} src={element.props.src} alt={element.props.alt} />
  ) : (
    <p {...props} />
  );
  /* eslint-enable react/destructuring-assignment, react/prop-types, react/jsx-props-no-spreading */
};

const Post = ({ title, date, description, content }) => (
  <article key={title} className={styles.post}>
    <Header title={title} date={date} />

    <blockquote className={styles.post__description}>{description}</blockquote>

    <Body>
      {/* eslint-disable react/display-name, react/jsx-props-no-spreading */}
      <ReactMarkdown
        escapeHtml={false}
        source={content}
        renderers={{
          paragraph: OverrideRenderers,
          code: Code,
          inlineCode: (props) => <Code inline {...props} />,
        }}
      />
      {/* eslint-enable react/display-name, react/jsx-props-no-spreading */}
    </Body>
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Post;
