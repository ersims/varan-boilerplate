import React from 'react';
import { Section } from '../../../components/Section/Section';
import { ReactComponent as SuccessIllustration } from '../../../../assets/vector/illustrations/undraw_start_building_vqhd.svg';
import { Link } from '../../../components/Link/Link';
import { Emoji } from '../../../components/Emoji/Emoji';

// Styles
import classes from './GetStartedSection.module.scss';

// Exports
export const GetStartedSection = () => (
  <Section containerClassName={classes.getStartedSectionContainer}>
    <h2 className={classes.getStartedSectionTitle}>
      <Emoji value="🚀" label="Rocket emoji" />
      Success
      <Emoji value="🚀" label="Rocket emoji" />
    </h2>
    <small className={classes.getStartedSectionSubTitle}>
      You have successfully set up your varan project. Now the fun can begin.
    </small>
    <div className={classes.getStartedSectionDescriptionGrid}>
      <div className={classes.getStartedSectionDescription}>
        <h3>Unleash your creativity</h3>
        <p>
          To get started, edit the file src/client/pages/Home.tsx and save to observe the magic of
          hot reloading. Cool huh?
          <Emoji value="😎" label="Playing it cool emoji" />
        </p>
        <p>Now it’s all up to you to make awesome websites!</p>
        <p>
          Don’t forget to check out the{' '}
          <Link to="https://github.com/ersims/varan">documentation</Link> if you get stuck.
        </p>
      </div>
      <div className={classes.getStartedSectionIllustrationContainer}>
        <SuccessIllustration />
      </div>
    </div>
  </Section>
);
