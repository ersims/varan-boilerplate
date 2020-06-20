import React, { FunctionComponent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import { CSSTransition } from 'react-transition-group';
import { Link } from '../Link/Link';
import { NavHamburger } from './NavHamburger/NavHamburger';
import { NavLink } from './NavLink/NavLink';

// Styles
import classes from './Navbar.module.scss';

// Exports
export const Navbar: FunctionComponent = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navbarContentId = 'navbar-list';
  const setSticky = () => setIsSticky(true);
  const unsetSticky = () => setIsSticky(false);
  const toggleMenu = () => setIsOpen((prevState) => !prevState);
  const handleInitialPosition = ({ currentPosition, previousPosition }: Waypoint.CallbackArgs) => {
    if (!previousPosition && currentPosition === Waypoint.above) setSticky();
  };

  // Close menu on navigation
  useEffect(() => setIsOpen(false), [location]);

  return (
    <>
      <Waypoint
        onEnter={unsetSticky}
        onLeave={setSticky}
        onPositionChange={handleInitialPosition}
      />
      <nav
        className={classNames(classes.navbar, {
          [classes.navbarSticky]: isSticky,
        })}
        role="navigation"
      >
        <Link className={classes.navbarLogo} to="/" aria-label="Home">
          <h1 className={classes.navbarLogoText}>Varan</h1>
        </Link>
        <NavHamburger
          isOpen={isOpen}
          onToggle={toggleMenu}
          ariaControls={navbarContentId}
          className={classes.navbarHamburger}
        />
        <CSSTransition
          // Use reverse animation (enter = Menu is hidden and exit = Menu is visible) to hide menu
          // using css - this allows media queries to control whether elements are visible for
          // accessibility reasons (e.g. tabbing and screen readers)
          appear
          in={!isOpen}
          exit={false}
          classNames={{
            enterDone: classes.navbarContentHidden,
          }}
          timeout={200}
        >
          <div
            className={classNames(classes.navbarContent, {
              [classes.navbarContentExpanded]: isOpen,
            })}
          >
            <ul
              id={navbarContentId}
              className={classNames(classes.navbarList, {
                [classes.navbarListContentExpanded]: isOpen,
              })}
            >
              <li className={classNames(classes.navbarListItem, classes.navbarListItemMobile)}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className={classes.navbarListItem}>
                <NavLink to="/examples">Examples</NavLink>
              </li>
              <li className={classes.navbarListItem}>
                <NavLink to="https://github.com/ersims/varan-boilerplate">GitHub</NavLink>
              </li>
            </ul>
          </div>
        </CSSTransition>
      </nav>
    </>
  );
};
