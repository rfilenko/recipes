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
