import React from 'react';

// Types
interface Props {
  title: string;
  subtitle?: string;
  description?: string;
}

export const Header = ({ title, subtitle, description }: Props) => {
  return (
    <header className="header header--main">
      <div className="header__hero">
        <h1 className="header__title">{title}</h1>
        {subtitle && <small className="header__subtitle">{subtitle}</small>}
        {description && <p className="header__description">{description}</p>}
      </div>
    </header>
  );
};
