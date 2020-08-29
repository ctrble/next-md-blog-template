import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import styles from './Image.module.scss';

const Image = ({ src, alt }) => (
  <LazyLoad height="100%" once classNamePrefix={`${styles.revealer} lazyload`}>
    <img src={src} alt={alt} />
  </LazyLoad>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
