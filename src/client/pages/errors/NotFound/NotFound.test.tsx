import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router';
import { NotFound } from './NotFound';

// Tests
it('should have correct page title', async () => {
  render(
    <HelmetProvider>
      <NotFound />
    </HelmetProvider>,
    { wrapper: MemoryRouter },
  );

  // Assertions
  await waitFor(() => expect(document.title).toEqual('Not Found'));
});
