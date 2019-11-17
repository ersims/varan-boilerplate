import React from 'react';
import { Route } from 'react-router';

// Types
interface HttpStatusProps {
  code: number;
  children: React.ReactNode;
}

// Exports
export const HttpStatus = ({ children, code }: HttpStatusProps) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext && code) staticContext.statusCode = code;
      return children;
    }}
  />
);
