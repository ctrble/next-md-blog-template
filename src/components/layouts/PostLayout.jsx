import React from 'react';

import PostsNav from 'src/components/PostsNav';

const PostLayout = ({ children }) => {
  return (
    <div>
      <PostsNav count={5} />
      {children}
    </div>
  );
};

export default PostLayout;
