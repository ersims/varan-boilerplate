import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

// Styles
import classes from './Main.module.scss';

// Types
interface MainProps {
  children: ReactNode;
  className?: string;
}

// Exports
export const Main: FunctionComponent<MainProps> = ({ children, className }) => (
  <main className={classNames(classes.main, className)} role="main">
    {children}
  </main>
);
