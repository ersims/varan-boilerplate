import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { GetStartedSection } from './GetStartedSection/GetStartedSection';

// Exports
export const Examples = () => (
  <>
    <Helmet>
      <title itemProp="name" lang="en">
        Examples
      </title>
    </Helmet>
    <Header title="Hello World" subtitle="show me — don't tell me" />
    <Main>
      <GetStartedSection />
    </Main>
  </>
);
