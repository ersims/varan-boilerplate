import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, StaticRouter } from 'react-router-dom';
import { HttpStatus } from './HttpStatus';

// Tests
it('should render children', () => {
  const routerContext: { statusCode?: number } = {};
  const { getByText } = render(
    <StaticRouter context={routerContext}>
      <HttpStatus code={400}>
        <p>My Page Component</p>
      </HttpStatus>
    </StaticRouter>,
  );

  // Assertions
  expect(getByText('My Page Component')).toBeInTheDocument();
  expect(getByText('My Page Component')).toBeVisible();
  expect(routerContext.statusCode).toBe(400);
});
it('should set the provided status code to router context `statusCode`', () => {
  const routerContext: { statusCode?: number } = {};
  const { getByText } = render(
    <StaticRouter context={routerContext}>
      <HttpStatus code={418}>
        <p>My Page Component</p>
      </HttpStatus>
    </StaticRouter>,
  );

  // Assertions
  expect(getByText('My Page Component')).toBeInTheDocument();
  expect(getByText('My Page Component')).toBeVisible();
  expect(routerContext.statusCode).toBe(418);
});
it('should work on non-static routers', () => {
  const { getByText } = render(
    <MemoryRouter>
      <HttpStatus code={418}>
        <p>My Page Component</p>
      </HttpStatus>
    </MemoryRouter>,
  );

  // Assertions
  expect(getByText('My Page Component')).toBeInTheDocument();
  expect(getByText('My Page Component')).toBeVisible();
});
