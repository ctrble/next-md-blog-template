import React from 'react';

import Nav from 'src/components/Nav';

const PostLayout = ({ children }) => {
  return (
    <div>
      <Nav count={5} />
      {children}
    </div>
  );
};

export default PostLayout;
