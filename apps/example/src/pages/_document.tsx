import { Children } from 'react';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

/**
 * ===========================
 * MAIN
 * ===========================
 */
export default class CustomDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <App
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              {...props} // @ts-ignore
            />
          ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [...Children.toArray(initialProps.styles)],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          {/*
            No-flash theme bootstrap — runs before React hydrates so the
            initial paint already matches localStorage / OS preference.
          */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(() => {
  try {
    var k = 'crudx-example-theme';
    var saved = localStorage.getItem(k);
    var sys = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var mode = saved || sys;
    if (mode === 'dark') document.documentElement.classList.add('dark');
    document.documentElement.style.colorScheme = mode;
  } catch (e) {}
})();`,
            }}
          />
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
