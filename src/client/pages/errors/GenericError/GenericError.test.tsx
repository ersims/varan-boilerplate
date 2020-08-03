import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router';
import { GenericError } from './GenericError';

// Tests
it('should have correct page title', async () => {
  render(
    <HelmetProvider>
      <GenericError />
    </HelmetProvider>,
    { wrapper: MemoryRouter },
  );

  // Assertions
  await waitFor(() => expect(document.title).toEqual('An error occurred'));
});
