import React, { FunctionComponent } from 'react';
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
  openInNewTab?: boolean;
  isExternal?: boolean;
}

// Exports
export const Link: FunctionComponent<LinkProps> = ({
  children,
  to,
  className,
  role,
  isExternal,
  openInNewTab,
}) => {
  // Is this external?
  if ((typeof isExternal === 'boolean' && isExternal) || isUrlExternal(to)) {
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
    <RRLink
      role={role}
      className={classNames(className, classes.link)}
      to={to}
      target={openInNewTab ? '_blank' : undefined}
    >
      {children}
    </RRLink>
  );
};
