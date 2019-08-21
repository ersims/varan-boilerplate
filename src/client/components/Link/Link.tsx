import React from 'react';
import { Link as RRLink } from 'react-router-dom';
import classNames from 'classnames';
import { isUrlExternal } from '../../lib/isUrlExternal';

// Styles
import classes from './Link.module.scss';

// Types
interface LinkProps {
  to: string;
  className?: string;
  role?: string;
  children: React.ReactNode;
}

// Exports
export const Link = ({ children, to, className, role }: LinkProps) => {
  // Is this external?
  if (isUrlExternal(to)) {
    return (
      <a
        role={role}
        rel="noopener noreferrer"
        className={classNames(className, classes.link)}
        href={to}
      >
        {children}
      </a>
    );
  }
  return (
    <RRLink role={role} className={classNames(className, classes.link)} to={to}>
      {children}
    </RRLink>
  );
};
