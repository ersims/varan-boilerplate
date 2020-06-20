import React, { FunctionComponent, ReactNode } from 'react';

// Styles
import classes from './Feature.module.scss';

// Types
interface FeatureProps {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const Feature: FunctionComponent<FeatureProps> = ({ Icon, title, subtitle, children }) => (
  <div className={classes.feature}>
    {Icon && <Icon className={classes.featureIcon} />}
    <h2 className={classes.featureTitle}>{title}</h2>
    {subtitle && <small className={classes.featureSubtitle}>{subtitle}</small>}
    {children}
  </div>
);
