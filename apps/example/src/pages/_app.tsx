import { Toaster } from 'react-hot-toast';
import { apolloOptions, APP_NAME, authOptions } from '@apps/config';
import {
  withApolloClient,
  withAuthIdentity,
  withRouteIndicator,
} from '@webbyx/next-js';
import compose from 'lodash/flowRight';
import Head from 'next/head';

const MyApp = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <title>{APP_NAME}</title>
      </Head>

      <Component {...pageProps} />
      <Toaster />
    </>
  );
};

// =============== EXPORTS
export default compose(
  withApolloClient({ ssr: true, options: apolloOptions }),
  withAuthIdentity({ ssr: true, apollo: true, options: authOptions }),
  withRouteIndicator()
)(MyApp);
