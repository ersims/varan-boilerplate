import React from 'react';
import { render, wait } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router';
import { NotFound } from './NotFound';

// Tests
it('should have correct page title', async done => {
  render(
    <HelmetProvider>
      <NotFound />
    </HelmetProvider>,
    { wrapper: MemoryRouter },
  );

  // Assertions
  await wait(() => expect(document.title).toEqual('Not Found'));

  // Done
  done();
});
