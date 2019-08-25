import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import { RootState } from '../../redux';
import { NavBarLink } from './Link';
import { AnimatedExpandable } from '../AnimatedExpandable';

// Types
interface Props {
  location: string;
  isOffline: boolean;
  isUpdated: boolean;
}

export const Nav = ({ location, isOffline, isUpdated }: Props) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const setSticky = () => setIsSticky(true);
  const unsetSticky = () => setIsSticky(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleInitialPosition = ({ currentPosition, previousPosition }: Waypoint.CallbackArgs) => {
    if (!previousPosition && currentPosition === Waypoint.above) setSticky();
  };

  // Close menu on navigation
  useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      <Waypoint onEnter={unsetSticky} onLeave={setSticky} onPositionChange={handleInitialPosition} />
      <nav
        className={classNames('navbar', {
          'navbar--offline': isOffline,
          'navbar--pending-updates': isUpdated,
          'navbar--sticky': isSticky,
        })}
      >
        <NavLink className="navbar__title" to="/" aria-label="Home" exact activeClassName="is-active">
          <h1 className="navbar__title-text">Varan</h1>
        </NavLink>
        <button
          className={classNames('navbar__hamburger', { 'is-expanded': isOpen })}
          aria-label="Menu"
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          type="button"
          onClick={toggleMenu}
          onKeyPress={e => e.key === 'Enter' && toggleMenu()}
        >
          <span className={classNames('navbar__hamburger-line', { 'is-expanded': isOpen })} />
          <span className={classNames('navbar__hamburger-line', { 'is-expanded': isOpen })} />
          <span className={classNames('navbar__hamburger-line', { 'is-expanded': isOpen })} />
        </button>
        <AnimatedExpandable isOpen={isOpen} className="navbar__list-container">
          <ul id="navbar-menu" className={classNames('navbar__list', { 'is-expanded': isOpen })} role="menubar">
            <li className="navbar__item" role="none">
              <NavBarLink role="menuitem" to="/examples">
                Examples
              </NavBarLink>
            </li>
            <li className="navbar__item" role="none">
              <NavBarLink role="menuitem" to="https://github.com/ersims/varan-boilerplate">
                GitHub
              </NavBarLink>
            </li>
          </ul>
        </AnimatedExpandable>
      </nav>
    </>
  );
};

export default connect((state: RootState) => ({
  location: state.router.location.pathname,
  isOffline: state.offline.isOffline,
  isUpdated: state.offline.isUpdated,
}))(Nav);
