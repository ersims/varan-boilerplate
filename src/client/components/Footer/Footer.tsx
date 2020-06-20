import React, { FunctionComponent } from 'react';
import { Emoji } from '../Emoji/Emoji';

// Styles
import classes from './Footer.module.scss';

// Exports
export const Footer: FunctionComponent = () => (
  <footer className={classes.footer}>
    <p className={classes.footerDescription}>
      Made with
      <Emoji value="❤" label="Heart emoji" />
    </p>
    <p className={classes.footerCopyright}>
      Copyright (c) 2018 -{new Date().getFullYear()}, All rights reserved
    </p>
  </footer>
);
