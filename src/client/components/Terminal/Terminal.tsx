import React from 'react';
import classNames from 'classnames';

// Animations
import installSrc from './install.gif';

// Styles
import classes from './Terminal.module.scss';

// Init
const terminalAnimations = {
  install: installSrc,
};

// Types
export type TerminalAnimation = keyof typeof terminalAnimations;
export interface TerminalProps {
  animation: TerminalAnimation;
  label: string;
}

// Exports
export const Terminal = ({ animation, label }: TerminalProps) => (
  <div className={classes.terminal}>
    <div className={classes.terminalTopBar}>
      <span
        className={classNames(classes.terminalTopBarButton, classes.terminalTopBarButtonClose)}
      />
      <span
        className={classNames(classes.terminalTopBarButton, classes.terminalTopBarButtonMinimize)}
      />
      <span
        className={classNames(classes.terminalTopBarButton, classes.terminalTopBarButtonMaximize)}
      />
    </div>
    <div className={classes.terminalImageContainer}>
      <img className={classes.terminalImage} src={terminalAnimations[animation]} alt={label} />
    </div>
  </div>
);
