import React, { FunctionComponent } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import classNames from 'classnames';
import { isUrlExternal } from '../../../lib/isUrlExternal';

// Styles
import classes from './NavLink.module.scss';

// Types
interface NavLinkProps {
  to: string;
  exact?: boolean;
  className?: string;
  role?: string;
  children: React.ReactNode;
}

// Exports
export const NavLink: FunctionComponent<NavLinkProps> = ({
  children,
  to,
  exact = true,
  className,
  role,
}) => {
  // Is this external?
  if (isUrlExternal(to)) {
    return (
      <a
        role={role}
        rel="noopener noreferrer"
        className={classNames(className, classes.navLink, classes.navLinkExternal)}
        href={to}
      >
        {children}
      </a>
    );
  }
  return (
    <RRNavLink
      role={role}
      className={classNames(className, classes.navLink)}
      exact={exact}
      to={to}
      activeClassName={classes.navLinkActive}
    >
      {children}
    </RRNavLink>
  );
};
