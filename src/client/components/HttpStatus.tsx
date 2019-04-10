// Dependencies
import * as React from 'react';
import { Route } from 'react-router';

// Types
interface Props {
  code: number;
  children: React.ReactNode;
}

export const HttpStatus = ({ children, code }: Props) => {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext && code) staticContext.statusCode = code;
        return children;
      }}
    />
  );
};
