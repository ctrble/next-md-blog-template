import React from 'react';
import App from 'next/app';
import SiteLayout from '../components/layouts/SiteLayout';

import 'src/pages/global.scss';

class MyApp extends App {
  render() {
    /* eslint-disable no-unused-vars, react/no-children-prop, react/jsx-props-no-spreading */
    const { Component, pageProps, router } = this.props;

    const getLayout =
      Component.getLayout || ((page) => <SiteLayout children={page} />);

    return getLayout(<Component {...pageProps} />);
    /* eslint-enable no-unused-vars, react/no-children-prop, react/jsx-props-no-spreading */
  }
}

export default MyApp;
