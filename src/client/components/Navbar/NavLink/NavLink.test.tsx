import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { NavLink } from './NavLink';

// Mocks
jest.mock('./NavLink.module.scss', () => ({
  navLinkActive: 'mocked-active-class',
}));

// Tests
it('should only have noopener and noreferrer on external NavLinks', () => {
  const { getByText } = render(
    <>
      <MemoryRouter>
        <NavLink to="http://github.com">ext1</NavLink>
        <NavLink to="https://github.com">ext2</NavLink>
        <NavLink to="//github.com">ext3</NavLink>
        <NavLink to="my-page">int1</NavLink>
        <NavLink to="/my-page">int2</NavLink>
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
    <NavLink className="my-class" to="http://github.com">
      ext
    </NavLink>,
  );

  // Assertions
  expect(getByText('ext')).toHaveClass('my-class');
});
it('should accept role', () => {
  const { getByText } = render(
    <NavLink role="menuitem" to="http://github.com">
      ext
    </NavLink>,
  );

  // Assertions
  expect(getByText('ext')).toHaveAttribute('role', 'menuitem');
});
it('should not be active if it is not the current url', () => {
  const history = createMemoryHistory({ initialEntries: ['/initial'] });
  const { getByText } = render(
    <Router history={history}>
      <NavLink role="menuitem" to="/path">
        link
      </NavLink>
    </Router>,
  );

  // Assertions
  expect(getByText('link')).not.toHaveClass('mocked-active-class');
});
it('should be active if it is the current url', () => {
  const history = createMemoryHistory({ initialEntries: ['/path'] });
  const { getByText } = render(
    <Router history={history}>
      <NavLink role="menuitem" to="/path">
        link
      </NavLink>
    </Router>,
  );

  // Assertions
  expect(getByText('link')).toHaveClass('mocked-active-class');
});
