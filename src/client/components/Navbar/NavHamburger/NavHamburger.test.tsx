import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { NavHamburger } from './NavHamburger';

// Tests
it('should trigger onToggle when clicked', () => {
  const onToggle = jest.fn();
  const { getByLabelText } = render(
    <NavHamburger ariaControls="dummy-id" isOpen={false} onToggle={onToggle} />,
  );
  fireEvent.click(getByLabelText('Menu'));

  // Assertions
  expect(onToggle).toHaveBeenCalled();
});
it('should accept className', () => {
  const { getByLabelText } = render(
    <NavHamburger
      ariaControls="dummy-id"
      isOpen={false}
      onToggle={jest.fn()}
      className="my-class"
    />,
  );

  // Assertions
  expect(getByLabelText('Menu')).toHaveClass('my-class');
});
it('should have have aria-expanded when open', () => {
  const { getByLabelText } = render(
    <NavHamburger ariaControls="dummy-id" isOpen onToggle={jest.fn()} />,
  );

  // Assertions
  expect(getByLabelText('Menu')).toHaveAttribute('aria-expanded', 'true');
});
it('should have not have aria-expanded when closed', () => {
  const { getByLabelText } = render(
    <NavHamburger ariaControls="dummy-id" isOpen={false} onToggle={jest.fn()} />,
  );

  // Assertions
  expect(getByLabelText('Menu')).toHaveAttribute('aria-expanded', 'false');
});
it('should have correct aria-controls attribute', () => {
  const { getByLabelText } = render(
    <NavHamburger ariaControls="dummy-id" isOpen={false} onToggle={jest.fn()} />,
  );

  // Assertions
  expect(getByLabelText('Menu')).toHaveAttribute('aria-controls', 'dummy-id');
});
