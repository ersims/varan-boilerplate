import React from 'react';
import { HttpStatus } from '../../../components/HttpStatus/HttpStatus';
import { Main } from '../../../components/Main/Main';
import { Header } from '../../../components/Header/Header';

// Exports
export const NotFound = () => (
  <HttpStatus code={404}>
    <Header title="404 // Not Found" subtitle="what you are looking for is not here..." />
    <Main>
      <h1>Still not found...</h1>
    </Main>
  </HttpStatus>
);
