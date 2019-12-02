import React from 'react';
import { render } from '@testing-library/react';
import { Emoji } from './Emoji';

// Tests
it('should have role=img', () => {
  const { getByRole } = render(<Emoji value="" label="Smile" />);

  // Assertions
  expect(getByRole('img')).toBeInTheDocument();
  expect(getByRole('img')).toBeVisible();
});
it('should have aria-label', () => {
  const { getByLabelText } = render(<Emoji value="" label="Smile" />);

  // Assertions
  expect(getByLabelText('Smile')).toBeInTheDocument();
  expect(getByLabelText('Smile')).toBeVisible();
});
