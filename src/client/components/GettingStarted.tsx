import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import classNames from 'classnames';

export const GettingStarted = () => {
  const [isVisible, setIsVisible] = useState(false);

  const setVisible = () => setIsVisible(true);
  const setNotVisible = () => setIsVisible(false);
  const handleInitialPosition = ({ currentPosition, previousPosition }: Waypoint.CallbackArgs) => {
    if (!previousPosition && currentPosition === Waypoint.above) setVisible();
  };
  return (
    <Waypoint onEnter={setVisible} onLeave={setNotVisible} onPositionChange={handleInitialPosition}>
      <div className="region getting-started">
        <section className="section">
          <div className={classNames({ 'is-focused': isVisible }, 'getting-started__description')}>
            <h2>Success</h2>
            <p>You have successfully set up the varan-boilerplate. Now the fun can begin.</p>
            <p>
              To get started, edit the file{' '}
              <span className="highlight highlight--inline highlight--path">src/client/pages/Home.tsx</span>
              and save to observe the magic of hot reloading. Cool huh? Now it’s all up to you to make great websites!
            </p>
            <p>
              Don’t forget to visit the documentation of
              <a href="https://github.com/ersims/varan">varan</a>
              to see what other options are available.
            </p>
          </div>
        </section>
      </div>
    </Waypoint>
  );
};
