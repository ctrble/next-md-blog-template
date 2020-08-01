import React from 'react';
import App from 'next/app';
import SiteLayout from '../components/layouts/SiteLayout';

import 'src/pages/global.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    const getLayout =
      Component.getLayout || ((page) => <SiteLayout children={page} />);

    return getLayout(<Component {...pageProps} />);
  }
}

export default MyApp;
