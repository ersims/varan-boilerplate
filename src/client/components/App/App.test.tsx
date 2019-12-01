import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { App } from './App';

// Mocks
jest.mock('../Navbar/Navbar', () => ({
  Navbar: () => 'NavbarMock',
}));
jest.mock('../../pages/Home/Home', () => ({
  Home: () => 'HomeMock',
}));
jest.mock('../../pages/Examples/Examples', () => ({
  Examples: () => 'ExamplesMock',
}));
jest.mock('../../pages/errors/NotFound/NotFound', () => ({
  NotFound: () => 'NotFoundMock',
}));

// Tests
it('should render Home on /', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  const { getByText } = render(
    <HelmetProvider>
      <Router history={history}>
        <App />
      </Router>
    </HelmetProvider>,
  );

  // Assertions
  expect(getByText('HomeMock')).toBeInTheDocument();
  expect(getByText('HomeMock')).toBeVisible();
});
it('should render Examples on /examples', () => {
  const history = createMemoryHistory({ initialEntries: ['/examples'] });
  const { getByText } = render(
    <HelmetProvider>
      <Router history={history}>
        <App />
      </Router>
    </HelmetProvider>,
  );

  // Assertions
  expect(getByText('ExamplesMock')).toBeInTheDocument();
  expect(getByText('ExamplesMock')).toBeVisible();
});
it('should render NotFound on unknown path', () => {
  const history = createMemoryHistory({ initialEntries: ['/non-existent-path'] });
  const { getByText } = render(
    <HelmetProvider>
      <Router history={history}>
        <App />
      </Router>
    </HelmetProvider>,
  );

  // Assertions
  expect(getByText('NotFoundMock')).toBeInTheDocument();
  expect(getByText('NotFoundMock')).toBeVisible();
});
it('should support navigation', () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  const { getByText } = render(
    <HelmetProvider>
      <Router history={history}>
        <App />
      </Router>
    </HelmetProvider>,
  );

  // Click
  history.push('/examples');

  // Assertions
  expect(getByText('ExamplesMock')).toBeInTheDocument();
  expect(getByText('ExamplesMock')).toBeVisible();
});
