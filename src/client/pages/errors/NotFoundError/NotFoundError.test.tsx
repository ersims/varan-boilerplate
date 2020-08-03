import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router';
import { NotFoundError } from './NotFoundError';

// Tests
it('should have correct page title', async () => {
  render(
    <HelmetProvider>
      <NotFoundError />
    </HelmetProvider>,
    { wrapper: MemoryRouter },
  );

  // Assertions
  await waitFor(() => expect(document.title).toEqual('Not Found'));
});
