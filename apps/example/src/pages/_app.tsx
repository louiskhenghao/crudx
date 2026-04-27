import Head from 'next/head';

import 'animate.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './shadcn.css';

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <title>Crudx Example</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

// =============== EXPORTS
export default MyApp;
