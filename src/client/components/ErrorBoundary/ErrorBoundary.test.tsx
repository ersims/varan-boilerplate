import React from 'react';
import { render } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';
import { GenericError } from '../../pages/errors/GenericError/GenericError';

// Mocks
jest.mock('../../pages/errors/GenericError/GenericError', () => ({
  GenericError: jest.fn().mockReturnValue('GenericErrorMock'),
}));

// Init
const consoleSpy = jest.spyOn(console, 'error').mockImplementation(jest.fn());

// Tests
beforeEach(jest.clearAllMocks);
it('should render children', () => {
  const { getByText } = render(
    <ErrorBoundary>
      <p>content</p>
    </ErrorBoundary>,
  );

  // Assertions
  expect(getByText('content')).toBeInTheDocument();
  expect(getByText('content')).toBeVisible();
});
describe('uncaught exceptions', () => {
  it('should render generic error page on uncaught exceptions', () => {
    const mockError = new Error('Mock error');
    const MockErrorComponent = () => {
      throw mockError;
    };
    const { getByText } = render(
      <ErrorBoundary>
        <MockErrorComponent />
      </ErrorBoundary>,
    );

    // Assertions
    expect(getByText('GenericErrorMock')).toBeInTheDocument();
    expect(getByText('GenericErrorMock')).toBeVisible();
    expect(GenericError).toHaveBeenCalledWith({ error: mockError }, {});
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenNthCalledWith(
      1,
      expect.stringContaining('Error: Uncaught [Error: Mock error]'),
      expect.anything(),
    );
  });
});
