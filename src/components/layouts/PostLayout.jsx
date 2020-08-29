import React from 'react';
import PropTypes from 'prop-types';

import Nav from 'src/components/Nav';

const PostLayout = ({ children }) => {
  return (
    <>
      <Nav count={5} />
      {children}
    </>
  );
};

PostLayout.propTypes = {
  children: PropTypes.node,
};

PostLayout.defaultProps = {
  children: null,
};

export default PostLayout;
