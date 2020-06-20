import React, { FunctionComponent } from 'react';

// Styles
import classes from './Emoji.module.scss';

// Types
interface EmojiProps {
  value: string;
  label: string;
}

// Exports
export const Emoji: FunctionComponent<EmojiProps> = ({ value, label }) => (
  <span className={classes.emoji} role="img" aria-label={label}>
    {value}
  </span>
);
