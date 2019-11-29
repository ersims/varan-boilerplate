import React from 'react';
import { Section } from '../../../components/Section/Section';
import { Feature } from '../../../components/Feature/Feature';
import { Emoji } from '../../../components/Emoji/Emoji';
import { ReactComponent as IconSpeedometer } from '../../../../assets/vector/icons/Icon-Speedometer.svg';
import { ReactComponent as IconWebpack } from '../../../../assets/vector/icons/Icon-Webpack.svg';
import { ReactComponent as IconHomeHeart } from '../../../../assets/vector/icons/Icon-Home-Heart.svg';
import { ReactComponent as IconFlightTakeoff } from '../../../../assets/vector/icons/Icon-Flight-Takeoff.svg';

// Styles
import classes from './FeaturesSection.module.scss';

// Exports
export const FeaturesSection = () => (
  <Section className={classes.featuresSection}>
    <div className={classes.featuresSectionGrid}>
      <Feature Icon={IconSpeedometer} title="Performance" subtitle="Lighthouse score = 100">
        <p>
          Build hassle-free high performance web apps. You are still responsible for your own code
          though
          <Emoji value="😉" label="Wink emoji" />
        </p>
      </Feature>
      <Feature Icon={IconWebpack} title="Flexible" subtitle="Bring your own code">
        <p>Fully featured and easily extendable — what is “ejecting” anyway?</p>
      </Feature>
      <Feature Icon={IconHomeHeart} title="Familiar" subtitle="Your favorite libraries">
        <p>Bring your own favorite frameworks, libraries and webpack plugins.</p>
      </Feature>
      <Feature Icon={IconFlightTakeoff} title="Modern" subtitle="Using the latest and greatest">
        <p>Using the latest and greatest to give you the best possible experience.</p>
      </Feature>
    </div>
  </Section>
);
