import Head from 'next/head';
import React, { memo } from 'react';

const LayoutFaviconComponent = () => (
  <>
    <meta name="theme-color" content="#38cfd9" />
    <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/favicon/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#da532c" />
  </>
);
export const LayoutFavicon = memo(LayoutFaviconComponent);

LayoutFavicon.displayName = 'LayoutFavicon';
