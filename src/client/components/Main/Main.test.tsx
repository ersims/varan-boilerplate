import React from 'react';
import { render } from '@testing-library/react';
import { Main } from './Main';

// Tests
it('should render children', () => {
  const { getByText } = render(
    <Main>
      <p>content</p>
    </Main>,
  );

  // Assertions
  expect(getByText('content')).toBeInTheDocument();
  expect(getByText('content')).toBeVisible();
});

it('should be a main', () => {
  const { container } = render(
    <Main>
      <p>content</p>
    </Main>,
  );

  // Assertions
  expect(container.firstChild).not.toBeFalsy();
  expect(container.firstChild!.nodeName).toBe('MAIN');
});
it('should accept className', () => {
  const { getByText } = render(<Main className="my-class">content</Main>);

  // Assertions
  expect(getByText('content')).toHaveClass('my-class');
});
