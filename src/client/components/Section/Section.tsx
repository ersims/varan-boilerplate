import React, { ReactNode, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import classNames from 'classnames';

// Types
interface Props {
  className?: string;
  children?: ReactNode;
}

export const Section = ({ className, children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const setVisible = () => setIsVisible(true);
  const setNotVisible = () => setIsVisible(false);
  const handleInitialPosition = ({ currentPosition, previousPosition }: Waypoint.CallbackArgs) => {
    if (!previousPosition && currentPosition === Waypoint.above) setVisible();
  };
  return (
    <Waypoint onEnter={setVisible} onLeave={setNotVisible} onPositionChange={handleInitialPosition}>
      <section className={classNames('section', className, { 'is-visible': isVisible })}>
        <div className="section__container">{children}</div>
      </section>
    </Waypoint>
  );
};
