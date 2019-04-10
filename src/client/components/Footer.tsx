import React, { ReactNode } from 'react';
import { ReactComponent as IconHeart } from '../../assets/vector/icons/Icon-Heart.svg';

// Types
interface Props {}

export const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <p className="footer__description">
        Made with <IconHeart className="footer__icon" />
      </p>
      <p className="footer__copyright">Copyright (c) 2018 - {new Date().getFullYear()}, All rights reserved</p>
    </footer>
  );
};
