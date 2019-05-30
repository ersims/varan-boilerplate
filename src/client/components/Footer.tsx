import React from 'react';
import { ReactComponent as IconHeart } from '../../assets/vector/icons/Icon-Heart.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">
        Made with
        <IconHeart className="footer__icon" />
      </p>
      <p className="footer__copyright">Copyright (c) 2018 -{new Date().getFullYear()}, All rights reserved</p>
    </footer>
  );
};
