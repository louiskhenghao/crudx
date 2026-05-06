import { LinkProvider } from '@crudx/common';
import Head from 'next/head';
import NextLink from 'next/link';

import { ThemeProvider } from '../components';

import 'animate.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './shadcn.css';

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider>
      <LinkProvider Link={NextLink as any}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1 maximum-scale=1"
          />
          <title>Crudx Example</title>
        </Head>
        <Component {...pageProps} />
      </LinkProvider>
    </ThemeProvider>
  );
};

// =============== EXPORTS
export default MyApp;
