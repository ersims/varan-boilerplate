import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import { NavLink } from '../NavLink/NavLink';
import { AnimatedExpandable } from '../AnimatedExpandable';

// Styles
import classes from './Navbar.module.scss';

// Exports
export const Navbar = withRouter(({ location }) => {
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
  console.log(classes);
  return (
    <>
      <Waypoint
        onEnter={unsetSticky}
        onLeave={setSticky}
        onPositionChange={handleInitialPosition}
      />
      <nav className={classNames(classes.navbar, { [classes.navbarSticky]: isSticky })}>
        <NavLink className={classes.navbarLogo} to="/" aria-label="Home" exact>
          <h1 className={classes.navbarLogoText}>Varan</h1>
        </NavLink>
        <button
          className={classNames(classes.navbarHamburger, {
            [classes.navbarHamburgerExpanded]: isOpen,
          })}
          aria-label="Menu"
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          type="button"
          onClick={toggleMenu}
          onKeyPress={e => e.key === 'Enter' && toggleMenu()}
        >
          <span
            className={classNames(classes.navbarHamburgerLine, {
              [classes.navbarHamburgerLineExpanded]: isOpen,
            })}
          />
          <span
            className={classNames(classes.navbarHamburgerLine, {
              [classes.navbarHamburgerLineExpanded]: isOpen,
            })}
          />
          <span
            className={classNames(classes.navbarHamburgerLine, {
              [classes.navbarHamburgerLineExpanded]: isOpen,
            })}
          />
        </button>
        <AnimatedExpandable isOpen={isOpen}>
          <ul
            id="navbar-menu"
            className={classNames(classes.navbarList, { [classes.navbarListExpanded]: isOpen })}
            role="menubar"
          >
            <li className={classes.navbarListItem} role="none">
              <NavLink role="menuitem" to="/examples">
                Examples
              </NavLink>
            </li>
            <li className={classes.navbarListItem} role="none">
              <NavLink role="menuitem" to="https://github.com/ersims/varan-boilerplate">
                GitHub
              </NavLink>
            </li>
          </ul>
        </AnimatedExpandable>
      </nav>
    </>
  );
});
