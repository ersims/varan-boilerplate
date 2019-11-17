import React, { ReactNode } from 'react';
import classNames from 'classnames';

// Styles
import classes from './Section.module.scss';

// Types
interface SectionProps {
  children?: ReactNode;
  containerClassName?: string;
  className?: string;
}

// Exports
export const Section = ({ children, containerClassName, className }: SectionProps) => (
  <section className={classNames(classes.sectionContainer, containerClassName)}>
    <div className={classNames(classes.section, className)}>{children}</div>
  </section>
);
