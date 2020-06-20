import React, { FunctionComponent } from 'react';
import { Header, HeaderProps } from '../../../components/Header/Header';
import { Terminal, TerminalProps } from '../../../components/Terminal/Terminal';

// Styles
import classes from './TerminalHeader.module.scss';

// Types
type TerminalHeaderProps = HeaderProps & TerminalProps;

// Exports
export const TerminalHeader: FunctionComponent<TerminalHeaderProps> = ({
  title,
  subtitle,
  description,
  animation,
}) => (
  <Header
    title={title}
    subtitle={subtitle}
    description={description}
    className={classes.terminalHeader}
  >
    <div className={classes.terminalHeaderTerminal}>
      <Terminal animation={animation} />
    </div>
  </Header>
);
