import React, { ReactNode } from 'react';

// Styles
import classes from './MainBase.module.scss';

// Types
export interface MainProps {
  children: ReactNode;
}

// Exports
export const MainBase = ({ children }: MainProps) => (
  <main role="main" className={classes.mainBase}>
    {children}
  </main>
);
