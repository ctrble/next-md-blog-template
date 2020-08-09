import React from 'react';

import Nav from 'src/components/Nav';

const PostLayout = ({ children }) => {
  return (
    <>
      <Nav count={5} />
      {children}
    </>
  );
};

export default PostLayout;
