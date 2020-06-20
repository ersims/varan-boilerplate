import React, { FunctionComponent } from 'react';
import classNames from 'classnames';

// Styles
import classes from './NavHamburger.module.scss';

// Types
interface NavHamburgerProps {
  isOpen: boolean;
  onToggle: () => void;
  ariaControls: string;
  className?: string;
}

// Exports
export const NavHamburger: FunctionComponent<NavHamburgerProps> = ({
  isOpen,
  onToggle,
  ariaControls,
  className,
}) => (
  <button
    className={classNames(classes.navHamburger, className)}
    aria-label="Menu"
    aria-expanded={isOpen}
    aria-controls={ariaControls}
    type="button"
    onClick={onToggle}
  >
    <span
      className={classNames(classes.navHamburgerLine, {
        [classes.navHamburgerLineExpanded]: isOpen,
      })}
    />
    <span
      className={classNames(classes.navHamburgerLine, {
        [classes.navHamburgerLineExpanded]: isOpen,
      })}
    />
    <span
      className={classNames(classes.navHamburgerLine, {
        [classes.navHamburgerLineExpanded]: isOpen,
      })}
    />
  </button>
);
