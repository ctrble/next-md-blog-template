import React from 'react';
import Header from '../Header';

const SiteLayout = ({ children }) => (
  <>
    <Header />
    <div>{children}</div>
  </>
);

export default SiteLayout;
