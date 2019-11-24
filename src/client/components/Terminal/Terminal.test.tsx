import React from 'react';
import { render } from '@testing-library/react';
import { Terminal } from './Terminal';

// Tests
it('video should be muted', () => {
  const { container } = render(<Terminal animation="install" />);

  // Assertions
  expect(container.querySelector('video[muted]')).toBeInTheDocument();
});
describe('install animation', () => {
  it('should have webm and mp4 video sources', () => {
    const { container } = render(<Terminal animation="install" />);

    // Assertions
    expect(container.querySelector('source[type="video/webm"]')).toBeInTheDocument();
    expect(container.querySelector('source[type="video/mp4"]')).toBeInTheDocument();
  });
  it('should have accessible label', () => {
    const { getByLabelText } = render(<Terminal animation="install" />);

    // Assertions
    expect(getByLabelText('Installing varan through terminal')).toBeInTheDocument();
    expect(getByLabelText('Installing varan through terminal')).toBeVisible();
  });
});
