import React, { useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { Feature } from './Feature';
import { ReactComponent as IconSpeedometer } from '../../assets/vector/icons/Icon-Speedometer.svg';
import { ReactComponent as IconWebpack } from '../../assets/vector/icons/Icon-Webpack.svg';
import { ReactComponent as IconHomeHeart } from '../../assets/vector/icons/Icon-Home-Heart.svg';
import { ReactComponent as IconFlightTakeoff } from '../../assets/vector/icons/Icon-Flight-Takeoff.svg';

export const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  const setVisible = () => setIsVisible(true);
  const setNotVisible = () => setIsVisible(false);
  const handleInitialPosition = ({ currentPosition, previousPosition }: Waypoint.CallbackArgs) => {
    if (!previousPosition && currentPosition === Waypoint.above) setVisible();
  };
  return (
    <Waypoint onEnter={setVisible} onLeave={setNotVisible} onPositionChange={handleInitialPosition}>
      <div className="region region--primary">
        <section className="section section__grid section__grid--4">
          <Feature isFocused={isVisible} Icon={IconSpeedometer} title="Performance" subtitle="Lighthouse score = 100">
            <p className="feature__description">
              Build hassle-free high performance web apps. You are still responsible for your own code though 😉
            </p>
          </Feature>
          <Feature isFocused={isVisible} Icon={IconWebpack} title="Flexible" subtitle="Bring your own code">
            <p className="feature__description">Fully featured and easily extendable - what is “ejecting” anyway?</p>
          </Feature>
          <Feature isFocused={isVisible} Icon={IconHomeHeart} title="Familiar" subtitle="Your favorite libraries">
            <p className="feature__description">Bring your own favorite frameworks, libraries and webpack plugins.</p>
          </Feature>
          <Feature
            isFocused={isVisible}
            Icon={IconFlightTakeoff}
            title="Modern"
            subtitle="Using the latest and greatest"
          >
            <p className="feature__description">
              Using the latest and greatest to give you the best possible experience.
            </p>
          </Feature>
        </section>
      </div>
    </Waypoint>
  );
};
