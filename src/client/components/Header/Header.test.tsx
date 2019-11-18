import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

// Tests
it('should render with the provided title', () => {
  const { getByText } = render(<Header title="Hello" />);
  expect(getByText('Hello')).toBeInTheDocument();
});
