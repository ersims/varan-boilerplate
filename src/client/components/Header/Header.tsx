import React from 'react';
import classNames from 'classnames';

// Styles
import classes from './Header.module.scss';

// Types
interface Props {
  title: string;
  subtitle?: string;
  description?: string;
}

// Exports
export const Header = ({ title, subtitle, description }: Props) => {
  return (
    <header className={classNames(classes.header, classes.headerMain)}>
      <div className={classes.headerHero}>
        <h1 className={classes.headerTitle}>{title}</h1>
        {subtitle && <small className={classes.headerSubtitle}>{subtitle}</small>}
        {description && <p className={classes.description}>{description}</p>}
      </div>
    </header>
  );
};
