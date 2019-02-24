import * as React from 'react';
import { HttpStatus } from '../../components/HttpStatus';

export const NotFound = () => {
  return (
    <HttpStatus code={404}>
      <header className="header header--main">
        <h1>404 = Not Found</h1>
        <small>Try again!</small>
      </header>
      <main role="main">
        <h1>Still not found..</h1>
      </main>
    </HttpStatus>
  );
};
