import React from 'react';
import Header from '../shared/Header';
import { StyledContainer } from '../styled';
import Head from 'next/head';

const BaseLayout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>
        <StyledContainer>{children}</StyledContainer>
      </main>
    </>
  );
};
export default BaseLayout;
