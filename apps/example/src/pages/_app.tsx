import { apolloOptions, APP_NAME, authOptions } from '@apps/config';
import { Layout } from '@apps/layouts';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache, LayoutConfigProvider } from '@webbyx/mui';
import {
  withApolloClient,
  withAuthIdentity,
  withRouteIndicator,
} from '@webbyx/next-js';
import compose from 'lodash/flowRight';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { useThemeConfig } from '../config/theme.config';

import 'animate.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

type ExtendedAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};

const clientSideCache = createEmotionCache();

const MyApp = (props: ExtendedAppProps) => {
  const {
    Component,
    router,
    pageProps,
    emotionCache = clientSideCache,
  } = props;
  const config = useThemeConfig();
  const setPageThemeSettings = Component.setPageThemeSettings ?? undefined;

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
    </>
  );

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1"
        />
        <title>{APP_NAME}</title>
      </Head>
      <LayoutConfigProvider
        config={config}
        paths={[router.asPath, router.pathname]}
        pageSettings={setPageThemeSettings?.()}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LayoutConfigProvider>
    </CacheProvider>
  );
};

// =============== EXPORTS
export default compose(
  withApolloClient({ ssr: true, options: apolloOptions }),
  withAuthIdentity({ ssr: true, apollo: true, options: authOptions }),
  withRouteIndicator()
)(MyApp);
