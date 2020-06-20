import React, { FunctionComponent, ReactNode } from 'react';
import { Route } from 'react-router';

// Types
interface HttpStatusProps {
  code: number;
  children: ReactNode;
}

// Exports
export const HttpStatus: FunctionComponent<HttpStatusProps> = ({ children, code }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext && code) staticContext.statusCode = code;
      return children;
    }}
  />
);
