import React, { FunctionComponent, ReactNode } from 'react';
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
export const Section: FunctionComponent<SectionProps> = ({
  children,
  className,
  contentClassName,
}) => (
  <section className={classNames(classes.section, className)}>
    <div className={classNames(classes.sectionContent, contentClassName)}>{children}</div>
  </section>
);
