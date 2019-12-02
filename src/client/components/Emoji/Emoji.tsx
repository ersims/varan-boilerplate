import React from 'react';

// Styles
import classes from './Emoji.module.scss';

// Types
interface EmojiProps {
  value: string;
  label: string;
}

// Exports
export const Emoji = ({ value, label }: EmojiProps) => (
  <span className={classes.emoji} role="img" aria-label={label}>
    {value}
  </span>
);
