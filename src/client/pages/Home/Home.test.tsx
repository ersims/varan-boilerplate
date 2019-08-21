import React from 'react';
import { render, wait } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from './Home';

// Tests
it('should have correct page title', async done => {
  render(
    <HelmetProvider>
      <Home />
    </HelmetProvider>,
  );

  // Assertions
  await wait(() => expect(document.title).toEqual('Home'));

  // Done
  done();
});
