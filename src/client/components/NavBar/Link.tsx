import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

// Types
interface Props {
  to: string;
  exact?: boolean;
  className?: string;
  role?: string;
  children: React.ReactNode;
}

export const NavBarLink = ({ children, to, exact = true, className, role }: Props) => {
  // Is this external?
  if (to.startsWith('https://') || to.startsWith('http://')) {
    return (
      <a role={role} rel="noopener" className={classNames(className, 'navbar__link navbar__link--external')} href={to}>
        {children}
      </a>
    );
  }
  return (
    <NavLink
      role={role}
      className={classNames(className, 'navbar__link')}
      exact={exact}
      to={to}
      activeClassName="is-active"
    >
      {children}
    </NavLink>
  );
};
