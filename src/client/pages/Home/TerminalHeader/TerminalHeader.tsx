import React from 'react';
import { Header, HeaderProps } from '../../../components/Header/Header';
import { Terminal, TerminalProps } from '../../../components/Terminal/Terminal';

// Styles
import classes from './TerminalHeader.module.scss';

// Types
type TerminalHeaderProps = HeaderProps & TerminalProps;

// Exports
export const TerminalHeader = ({
  title,
  subtitle,
  description,
  animation,
  label,
}: TerminalHeaderProps) => (
  <Header
    title={title}
    subtitle={subtitle}
    description={description}
    containerClassName={classes.terminalHeader}
  >
    <div className={classes.terminalHeaderTerminal}>
      <Terminal animation={animation} label={label} />
    </div>
  </Header>
);
