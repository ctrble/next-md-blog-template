import React from 'react';
import LazyLoad from 'react-lazyload';

import styles from './Image.module.scss';

const Image = ({ src, alt }) => (
  <LazyLoad
    height={'100%'}
    once={true}
    classNamePrefix={`${styles.revealer} lazyload`}
  >
    <img src={src} alt={alt} />
  </LazyLoad>
);

export default Image;
