import React from 'react';
import { render } from '@testing-library/react';
import { Section } from './Section';

// Tests
it('should render children', () => {
  const { getByText } = render(
    <Section>
      <p>content</p>
    </Section>,
  );

  // Assertions
  expect(getByText('content')).toBeInTheDocument();
  expect(getByText('content')).toBeVisible();
});
it('should be a section', () => {
  const { container } = render(
    <Section>
      <p>content</p>
    </Section>,
  );

  // Assertions
  expect(container.firstChild?.nodeName).toBe('SECTION');
});
it('should accept className', () => {
  const { getByText } = render(<Section className="my-class">content</Section>);

  // Assertions
  expect(getByText('content')).toHaveClass('my-class');
  expect(getByText('content').closest('section')).not.toHaveClass('my-class');
});
it('should accept containerClassName', () => {
  const { getByText } = render(<Section containerClassName="my-container-class">content</Section>);

  // Assertions
  expect(getByText('content')).not.toHaveClass('my-container-class');
  expect(getByText('content').closest('section')).toHaveClass('my-container-class');
});
