import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Link } from './Link';

// Tests
it('should only have noopener and noreferrer on external links', () => {
  const { getByText } = render(
    <>
      <MemoryRouter>
        <Link to="http://github.com">ext1</Link>
        <Link to="https://github.com">ext2</Link>
        <Link to="//github.com">ext3</Link>
        <Link to="my-page">int1</Link>
        <Link to="/my-page">int2</Link>
      </MemoryRouter>
    </>,
  );

  // Assertions
  expect(getByText('ext1')).toHaveAttribute('rel', 'noopener noreferrer');
  expect(getByText('ext2')).toHaveAttribute('rel', 'noopener noreferrer');
  expect(getByText('ext3')).toHaveAttribute('rel', 'noopener noreferrer');
  expect(getByText('int1')).not.toHaveAttribute('rel');
  expect(getByText('int2')).not.toHaveAttribute('rel');
});
it('should accept className', () => {
  const { getByText } = render(
    <Link className="my-class" to="http://github.com">
      ext
    </Link>,
  );

  // Assertions
  expect(getByText('ext')).toHaveClass('my-class');
});
it('should accept role', () => {
  const { getByText } = render(
    <Link role="menuitem" to="http://github.com">
      ext
    </Link>,
  );

  // Assertions
  expect(getByText('ext')).toHaveAttribute('role', 'menuitem');
});
