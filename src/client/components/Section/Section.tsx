import React, { ReactNode } from 'react';
import classNames from 'classnames';

// Styles
import classes from './Section.module.scss';

// Types
interface SectionProps {
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
}

// Exports
export const Section = ({ children, className, contentClassName }: SectionProps) => (
  <section className={classNames(classes.section, className)}>
    <div className={classNames(classes.sectionContent, contentClassName)}>{children}</div>
  </section>
);
