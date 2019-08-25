import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__description">
        Made with
        <span className="emoji" role="img" aria-label="Heart emoji">
          ❤
        </span>
      </p>
      <p className="footer__copyright">Copyright (c) 2018 -{new Date().getFullYear()}, All rights reserved</p>
    </footer>
  );
};
