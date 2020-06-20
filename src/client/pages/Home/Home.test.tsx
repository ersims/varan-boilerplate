import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from './Home';

// Tests
it('should have correct page title', async () => {
  render(
    <HelmetProvider>
      <Home />
    </HelmetProvider>,
  );

  // Assertions
  await waitFor(() => expect(document.title).toEqual('Home'));
});
