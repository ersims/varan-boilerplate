import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

// Tests
it('should render the provided title', () => {
  const { getByText } = render(<Header title="Hello" />);
  const element = getByText('Hello');

  // Assertions
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});
it('should render the provided subtitle', () => {
  const { getByText } = render(<Header title="Hello" subtitle="World" />);
  const element = getByText('World');

  // Assertions
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});
it('should render the provided description', () => {
  const { getByText } = render(<Header title="Hello" description="Long description" />);
  const element = getByText('Long description');

  // Assertions
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
});
