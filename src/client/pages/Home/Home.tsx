import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/Header/Header';
import { Section } from '../../components/Section/Section';
import { Feature } from '../../components/Feature/Feature';
import { ReactComponent as IconSpeedometer } from '../../../assets/vector/icons/Icon-Speedometer.svg';
import { ReactComponent as IconWebpack } from '../../../assets/vector/icons/Icon-Webpack.svg';
import { ReactComponent as IconHomeHeart } from '../../../assets/vector/icons/Icon-Home-Heart.svg';
import { ReactComponent as IconFlightTakeoff } from '../../../assets/vector/icons/Icon-Flight-Takeoff.svg';
import { ReactComponent as SuccessIllustration } from '../../../assets/vector/illustrations/undraw_start_building_vqhd.svg';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title itemProp="name" lang="en">
          Welcome to varan
        </title>
      </Helmet>
      <Header title="varan" subtitle="modern webdev made simple" />
      <main role="main" className="main main--content">
        <Section className="section--primary">
          <div className="grid grid--4">
            <Feature Icon={IconSpeedometer} title="Performance" subtitle="Lighthouse score = 100">
              <p className="feature__description">
                Build hassle-free high performance web apps. You are still responsible for your own code though
                <span className="emoji" role="img" aria-label="Wink emoji">
                  😉
                </span>
              </p>
            </Feature>
            <Feature Icon={IconWebpack} title="Flexible" subtitle="Bring your own code">
              <p className="feature__description">Fully featured and easily extendable - what is “ejecting” anyway?</p>
            </Feature>
            <Feature Icon={IconHomeHeart} title="Familiar" subtitle="Your favorite libraries">
              <p className="feature__description">Bring your own favorite frameworks, libraries and webpack plugins.</p>
            </Feature>
            <Feature Icon={IconFlightTakeoff} title="Modern" subtitle="Using the latest and greatest">
              <p className="feature__description">
                Using the latest and greatest to give you the best possible experience.
              </p>
            </Feature>
          </div>
        </Section>
        <Section className="section--secondary">
          <h2 className="section__title">
            <span className="emoji" role="img" aria-label="Rocket emoji">
              🚀
            </span>
            Success
            <span className="emoji" role="img" aria-label="Rocket emoji">
              🚀
            </span>
          </h2>
          <small className="section__subtitle">
            You have successfully set up your varan project. Now the fun can begin.
          </small>
          <div className="success">
            <div className="success__description">
              <h3>Unleash your creativity</h3>
              <p>
                To get started, edit the file src/client/pages/Home.tsx and save to observe the magic of hot reloading.
                Cool huh?
                <span className="emoji" role="img" aria-label="Playing it cool emoji">
                  😎
                </span>
              </p>
              <p>Now it’s all up to you to make awesome websites!</p>
              <p>
                Don’t forget to check out the{' '}
                <a href="https://github.com/ersims/varan" rel="noopener">
                  documentation
                </a>{' '}
                if you get stuck.
              </p>
            </div>
            <div className="success__illustration">
              <SuccessIllustration />
            </div>
          </div>
        </Section>
      </main>
    </>
  );
};
