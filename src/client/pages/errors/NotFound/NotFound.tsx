import React from 'react';
import { HttpStatus } from '../../../components/HttpStatus';
import { MainBase } from '../../../components/MainBase/MainBase';
import { Header } from '../../../components/Header/Header';

// Exports
export const NotFound = () => (
  <HttpStatus code={404}>
    <Header title="404 // Not Found" subtitle="what you are looking for is not here..." />
    <MainBase>
      <h1>Still not found...</h1>
    </MainBase>
  </HttpStatus>
);
