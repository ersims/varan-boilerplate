import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { FeaturesSection } from './FeaturesSection/FeaturesSection';
import { GetStartedSection } from './GetStartedSection/GetStartedSection';

export const Home = () => (
  <>
    <Helmet>
      <title itemProp="name" lang="en">
        Home
      </title>
    </Helmet>
    <Header title="varan" subtitle="modern webdev made simple" />
    <Main>
      <FeaturesSection />
      <GetStartedSection />
    </Main>
  </>
);
