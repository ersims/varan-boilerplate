import React, { ReactNode } from 'react';

// Types
interface Props {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const Feature = ({ Icon, title, subtitle, children }: Props) => {
  return (
    <div className="feature">
      {Icon && <Icon className="feature__icon" />}
      <h2 className="feature__title">{title}</h2>
      {subtitle && <small className="feature__subtitle">{subtitle}</small>}
      {children}
    </div>
  );
};
