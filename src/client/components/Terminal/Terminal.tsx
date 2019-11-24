import React from 'react';
import classNames from 'classnames';

// Animations
import installSrcMp4 from './assets/install.mp4';
import installSrcWebm from './assets/install.webm';
import installSrcCaptions from './assets/install.vtt';

// Styles
import classes from './Terminal.module.scss';

// Init
const terminalAnimations = {
  install: {
    mp4: installSrcMp4,
    webm: installSrcWebm,
    label: 'Installing varan through terminal',
    captions: installSrcCaptions,
  },
};

// Types
export type TerminalAnimation = keyof typeof terminalAnimations;
export interface TerminalProps {
  animation: TerminalAnimation;
}

// Exports
export const Terminal = ({ animation }: TerminalProps) => (
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
    {/* Ugly hack for html 5 video element because of https://github.com/facebook/react/issues/6544 */}
    <div
      className={classes.terminalImageContainer}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `<video class="${classes.terminalImage}" autoplay loop playsinline muted aria-label="${terminalAnimations[animation].label}"><source src="${terminalAnimations[animation].webm}" type="video/webm" /><source src="${terminalAnimations[animation].mp4}" type="video/mp4" /><track kind="captions" srcLang="en" src="${terminalAnimations[animation].captions}" /></video>`,
      }}
    />
  </div>
);
