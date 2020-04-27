import Document, { Main, NextScript, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { LayoutFavicon } from '../components/layouts/LayoutFavicon';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content="build with nextjs" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&family=Merriweather:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <LayoutFavicon />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
