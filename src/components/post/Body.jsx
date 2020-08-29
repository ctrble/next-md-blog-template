import React from 'react';
import PropTypes from 'prop-types';

import styles from './Body.module.scss';

const Body = ({ children }) => <div className={styles.body}>{children}</div>;

Body.propTypes = {
  children: PropTypes.node,
};

Body.defaultProps = {
  children: null,
};

export default Body;
