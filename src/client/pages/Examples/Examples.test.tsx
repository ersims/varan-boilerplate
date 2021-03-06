import React from 'react';
import { render, wait } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { Examples } from './Examples';

// Tests
it('should have correct page title', async done => {
  render(
    <HelmetProvider>
      <Examples />
    </HelmetProvider>,
  );

  // Assertions
  await wait(() => expect(document.title).toEqual('Examples'));

  // Done
  done();
});
