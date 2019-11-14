import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../../components/Header/Header';
import { MainBase } from '../../components/MainBase/MainBase';

// Exports
export const Examples = () => (
  <>
    <Helmet>
      <title itemProp="name" lang="en">
        Examples
      </title>
    </Helmet>
    <Header title="examples" subtitle="show me the way" />
    <MainBase>
      <p>Here we go</p>
    </MainBase>
  </>
);
