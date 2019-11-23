import React from 'react';
import { render } from '@testing-library/react';
import { Feature } from './Feature';

// Tests
it('should render title', () => {
  const { getByText } = render(
    <Feature title="Title">
      <p>My paragraph</p>
    </Feature>,
  );

  // Assertions
  expect(getByText('Title')).toBeInTheDocument();
  expect(getByText('Title')).toBeVisible();
});
it('should render children', () => {
  const { getByText } = render(
    <Feature title="Title">
      <p>My paragraph</p>
    </Feature>,
  );

  // Assertions
  expect(getByText('My paragraph')).toBeInTheDocument();
  expect(getByText('My paragraph')).toBeVisible();
});
it('should render optional prop subtitle', () => {
  const { getByText } = render(
    <Feature title="Title" subtitle="Subtitle">
      <p>My paragraph</p>
    </Feature>,
  );

  // Assertions
  expect(getByText('Subtitle')).toBeInTheDocument();
  expect(getByText('Subtitle')).toBeVisible();
});
it('should render optional prop Icon', () => {
  const { getByText } = render(
    <Feature title="Title" Icon={() => <svg>MyIcon</svg>}>
      <p>My paragraph</p>
    </Feature>,
  );

  // Assertions
  expect(getByText('MyIcon')).toBeInTheDocument();
  expect(getByText('MyIcon')).toBeVisible();
});
