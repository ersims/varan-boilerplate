import React, { ReactNode } from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Waypoint } from 'react-waypoint';
import { Navbar } from './Navbar';

// Mocks
const WaypointMock = (Waypoint as any) as jest.Mock<ReactNode>;
jest.mock('react-waypoint', () => ({
  Waypoint: jest.fn(() => 'mocked-waypoint'),
}));
jest.mock('./Navbar.module.scss', () => ({
  navbarSticky: 'mocked-sticky-menu',
  navbarListContainerExpanded: 'mocked-expanded-hamburger-menu',
}));

// Tests
it('should be nav', () => {
  const { container } = render(<Navbar />, { wrapper: MemoryRouter });

  // Assertions
  expect(container.querySelector('nav')).toBeInTheDocument();
  expect(container.querySelector('nav')).toBeVisible();
});
describe('stickyness', () => {
  it('should not be sticky by default', () => {
    const { container } = render(<Navbar />, { wrapper: MemoryRouter });

    // Assertions
    expect(container.querySelector('.mocked-sticky-menu')).not.toBeInTheDocument();
  });
  it('should be sticky if navbar is not fully visible in viewport', () => {
    WaypointMock.mockImplementationOnce(({ onPositionChange }) => {
      onPositionChange({ currentPosition: Waypoint.above });
      return 'mocked-waypoint';
    });
    const { container } = render(<Navbar />, { wrapper: MemoryRouter });

    // Assertions
    expect(container.querySelector('.mocked-sticky-menu')).toBeInTheDocument();
  });
  it('should become sticky if navbar is no longer fully visible in viewport', () => {
    let onLeaveRef: Function;
    WaypointMock.mockImplementationOnce(({ onLeave }) => {
      onLeaveRef = onLeave;
      return 'mocked-waypoint';
    });

    const { container } = render(<Navbar />, { wrapper: MemoryRouter });

    // Mock scrolling
    act(() => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      onLeaveRef!();
    });

    // Assertions
    expect(container.querySelector('.mocked-sticky-menu')).toBeInTheDocument();
  });
  it('should become unsticky if navbar becomes fully visible in viewport', () => {
    let onEnterRef: Function;
    WaypointMock.mockImplementationOnce(({ onEnter, onPositionChange }) => {
      onEnterRef = onEnter;
      onPositionChange({ currentPosition: Waypoint.above });
      return 'mocked-waypoint';
    });

    const { container } = render(<Navbar />, { wrapper: MemoryRouter });

    // Mock scrolling
    act(() => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      onEnterRef!();
    });

    // Assertions
    expect(container.querySelector('.mocked-sticky-menu')).not.toBeInTheDocument();
  });
});
describe('hamburger', () => {
  it('should have menu hamburger button', () => {
    const { getByLabelText } = render(<Navbar />, { wrapper: MemoryRouter });

    // Assertions
    expect(getByLabelText('Menu')).toBeInTheDocument();
  });
  it('should not be open by default', () => {
    const { container } = render(<Navbar />, { wrapper: MemoryRouter });

    // Assertions
    expect(container.querySelector('.mocked-expanded-hamburger-menu')).not.toBeInTheDocument();
  });
  it('should open when Menu button is clicked', () => {
    const { container, getByLabelText } = render(<Navbar />, { wrapper: MemoryRouter });

    // Click
    fireEvent.click(getByLabelText('Menu'));

    // Assertions
    expect(container.querySelector('.mocked-expanded-hamburger-menu')).toBeInTheDocument();
    expect(container.querySelector('.mocked-expanded-hamburger-menu')).toBeVisible();
  });
  it('should close when Menu button is clicked twice', () => {
    const { container, getByLabelText } = render(<Navbar />, { wrapper: MemoryRouter });

    // Click
    fireEvent.click(getByLabelText('Menu'));
    fireEvent.click(getByLabelText('Menu'));

    // Assertions
    expect(container.querySelector('.mocked-expanded-hamburger-menu')).not.toBeInTheDocument();
  });
});
describe('links', () => {
  describe('/', () => {
    it('should have link to home page', () => {
      const { getByText } = render(<Navbar />, { wrapper: MemoryRouter });

      // Assertions
      expect(getByText('Home')).toBeInTheDocument();
      expect(getByText('Home')).toBeVisible();
    });
    it('should navigate to /', () => {
      const history = createMemoryHistory({ initialEntries: ['/initial'] });
      const { getByText } = render(
        <Router history={history}>
          <Navbar />
        </Router>,
      );

      // Click
      fireEvent.click(getByText('Home'));

      // Assertions
      expect(history.location.pathname).toBe('/');
    });
  });
  describe('/examples', () => {
    it('should have link to examples page', () => {
      const { getByText } = render(<Navbar />, { wrapper: MemoryRouter });

      // Assertions
      expect(getByText('Examples')).toBeInTheDocument();
      expect(getByText('Examples')).toBeVisible();
    });
    it('should navigate to /examples', () => {
      const history = createMemoryHistory({ initialEntries: ['/initial'] });
      const { getByText } = render(
        <Router history={history}>
          <Navbar />
        </Router>,
      );

      // Click
      fireEvent.click(getByText('Examples'));

      // Assertions
      expect(history.location.pathname).toBe('/examples');
    });
  });
  describe('github', () => {
    it('should have external link to github', () => {
      const { getByText } = render(<Navbar />, { wrapper: MemoryRouter });

      // Assertions
      expect(getByText('GitHub')).toBeInTheDocument();
      expect(getByText('GitHub')).toBeVisible();
      expect(getByText('GitHub').nodeName).toBe('A');
      expect(getByText('GitHub')).toHaveAttribute(
        'href',
        'https://github.com/ersims/varan-boilerplate',
      );
    });
  });
});
