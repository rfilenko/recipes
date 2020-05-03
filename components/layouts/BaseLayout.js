import React from 'react';
import Head from 'next/head';
import Header from '../shared/Header';
import { StyledContainer } from '../styled';
import { LayoutFavicon } from './LayoutFavicon';

const BaseLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="recipe app, build with nextjs" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LayoutFavicon />

      <Header />
      <main>
        <StyledContainer>{children}</StyledContainer>
      </main>
    </>
  );
};
export default BaseLayout;
