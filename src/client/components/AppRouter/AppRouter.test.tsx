import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { AppRouter } from './AppRouter';
import { Home } from '../../pages/Home/Home';
import { Examples } from '../../pages/Examples/Examples';
import { NotFoundError } from '../../pages/errors/NotFoundError/NotFoundError';
import { App } from '../App/App';

// Mocks
jest.mock('../../pages/Home/Home', () => ({
  Home: jest.fn().mockReturnValue('HomeMock'),
}));
jest.mock('../../pages/Examples/Examples', () => ({
  Examples: jest.fn().mockReturnValue('ExamplesMock'),
}));
jest.mock('../../pages/errors/NotFoundError/NotFoundError', () => ({
  NotFoundError: jest.fn().mockReturnValue('NotFoundErrorMock'),
}));

// Tests
beforeEach(jest.clearAllMocks);
describe('routing', () => {
  describe('Home on /', () => {
    const uri = '/';
    it('should render Home', () => {
      const history = createMemoryHistory({ initialEntries: [uri] });
      const { getByText } = render(
        <HelmetProvider>
          <Router history={history}>
            <AppRouter />
          </Router>
        </HelmetProvider>,
      );

      // Assertions
      expect(getByText('HomeMock')).toBeInTheDocument();
      expect(getByText('HomeMock')).toBeVisible();
      expect(Home).toHaveBeenCalled();
    });
  });
  describe('Examples on /examples', () => {
    const uri = '/examples';
    it('should render Examples', () => {
      const history = createMemoryHistory({ initialEntries: [uri] });
      const { getByText } = render(
        <HelmetProvider>
          <Router history={history}>
            <AppRouter />
          </Router>
        </HelmetProvider>,
      );

      // Assertions
      expect(getByText('ExamplesMock')).toBeInTheDocument();
      expect(getByText('ExamplesMock')).toBeVisible();
      expect(Examples).toHaveBeenCalled();
    });
  });
  describe('fallback to NotFound on non-existing urls', () => {
    const uri = '/non-existing';
    it('should render NotFound', () => {
      const history = createMemoryHistory({ initialEntries: [uri] });
      const { getByText } = render(
        <HelmetProvider>
          <Router history={history}>
            <AppRouter />
          </Router>
        </HelmetProvider>,
      );

      // Assertions
      expect(getByText('NotFoundErrorMock')).toBeInTheDocument();
      expect(getByText('NotFoundErrorMock')).toBeVisible();
      expect(NotFoundError).toHaveBeenCalled();
    });
  });
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
