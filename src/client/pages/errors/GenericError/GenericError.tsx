import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import { HttpStatus } from '../../../components/HttpStatus/HttpStatus';
import { Main } from '../../../components/Main/Main';
import { Header } from '../../../components/Header/Header';

// Exports
export const GenericError: FunctionComponent<{ error?: Error }> = () => (
  <HttpStatus code={500}>
    <Helmet>
      <title itemProp="name" lang="en">
        An error occurred
      </title>
    </Helmet>
    <Header title="500 // Error" subtitle="something unexpected happened..." />
    <Main>
      <h1>Something unknown happened... You should not have seen this...</h1>
    </Main>
  </HttpStatus>
);
