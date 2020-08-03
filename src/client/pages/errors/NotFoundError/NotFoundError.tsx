import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet-async';
import { HttpStatus } from '../../../components/HttpStatus/HttpStatus';
import { Main } from '../../../components/Main/Main';
import { Header } from '../../../components/Header/Header';

// Exports
export const NotFoundError: FunctionComponent = () => (
  <HttpStatus code={404}>
    <Helmet>
      <title itemProp="name" lang="en">
        Not Found
      </title>
    </Helmet>
    <Header title="404 // Not Found" subtitle="what you are looking for is not here..." />
    <Main>
      <h1>Page was not found...</h1>
    </Main>
  </HttpStatus>
);
