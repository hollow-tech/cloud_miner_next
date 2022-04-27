import Document, { DocumentContext, DocumentInitialProps, Main, NextScript, Head, Html } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link type="font/ttf" rel="preload" crossOrigin="" href="/fonts/Lato-Semibold/ttf" as="font" />
          <link type="font/ttf" rel="preload" crossOrigin="" href="/fonts/Lato-Medium.ttf" as="font" />
          <link type="font/ttf" rel="preload" crossOrigin="" href="/fonts/Lato-Regular.ttf" as="font" />
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}




