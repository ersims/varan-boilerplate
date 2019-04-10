import React, { ReactNode } from 'react';
import classNames from 'classnames';

// Types
interface Props {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle?: string;
  isFocused?: boolean;
  children: ReactNode;
}

export const Feature = ({ Icon, title, subtitle, isFocused = false, children }: Props) => {
  return (
    <div className={classNames({ 'is-focused': isFocused }, 'feature')}>
      <Icon className="feature__icon" />
      <h2 className="feature__title">{title}</h2>
      {subtitle && <small className="feature__subtitle">{subtitle}</small>}
      {children}
    </div>
  );
};
