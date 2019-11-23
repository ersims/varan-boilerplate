import React, { ReactNode } from 'react';
import classNames from 'classnames';

// Styles
import classes from './Header.module.scss';

// Types
export interface HeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  containerClassName?: string;
  children?: ReactNode;
}

// Exports
export const Header = ({
  title,
  subtitle,
  description,
  containerClassName,
  children,
}: HeaderProps) => (
  <header className={classNames(classes.header)}>
    <div className={classNames(classes.headerHero, containerClassName)}>
      <h1 className={classes.headerTitle}>{title}</h1>
      {subtitle && <small className={classes.headerSubtitle}>{subtitle}</small>}
      {description && <p className={classes.description}>{description}</p>}
      {children}
    </div>
  </header>
);
