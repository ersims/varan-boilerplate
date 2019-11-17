import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { withRouter } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import { Link } from '../Link/Link';
import { NavLink } from './NavLink/NavLink';

// Styles
import classes from './Navbar.module.scss';

// Exports
export const Navbar = withRouter(({ location }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const setSticky = () => setIsSticky(true);
  const unsetSticky = () => setIsSticky(false);
  const toggleMenu = () => setIsOpen(prevState => !prevState);
  const handleInitialPosition = ({ currentPosition, previousPosition }: Waypoint.CallbackArgs) => {
    if (!previousPosition && currentPosition === Waypoint.above) setSticky();
  };

  // Close menu on navigation
  // useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      <Waypoint
        onEnter={unsetSticky}
        onLeave={setSticky}
        onPositionChange={handleInitialPosition}
      />
      <nav className={classNames(classes.navbar, { [classes.navbarSticky]: isSticky })}>
        <Link role="menuitem" className={classes.navbarLogo} to="/" aria-label="Home">
          <h1 className={classes.navbarLogoText}>Varan</h1>
        </Link>
        <button
          className={classes.navbarHamburger}
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
        <div
          className={classNames(classes.navbarListContainer, {
            [classes.navbarListContainerExpanded]: isOpen,
          })}
        >
          <ul
            id="navbar-menu"
            className={classNames(classes.navbarList, { [classes.navbarListExpanded]: isOpen })}
            role="menubar"
          >
            <li
              className={classNames(classes.navbarListItem, classes.navbarListItemMobile)}
              role="none"
            >
              <NavLink role="menuitem" to="/">
                Home
              </NavLink>
            </li>
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
        </div>
      </nav>
    </>
  );
});
