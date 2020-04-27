import Document, { Main, NextScript, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content="build with nextjs" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#38cfd9"></meta>
          <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&family=Merriweather:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
