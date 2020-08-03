import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet-async';
import favicon from '../../../assets/favicon.ico';
import { AppRouter } from '../AppRouter/AppRouter';

// Manifests
import webmanifest from '../../../assets/manifest.webmanifest';

// Exports
export const App = hot(() => (
  <>
    <Helmet titleTemplate="%s | Varan">
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="A varan react starter app" />
      <meta name="og:type" content="website" />
      <meta name="theme-color" content="#59C3C3" />
      <link rel="icon" href={favicon} />
      <link rel="manifest" href={webmanifest} />
    </Helmet>
    <AppRouter />
  </>
));
