import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Examples = () => {
  return (
    <>
      <Helmet>
        <title itemProp="name" lang="en">
          About varan
        </title>
      </Helmet>
      <header className="header header--main">
        <h1>Varan is the awesome and hassle-free create-react-app you need!</h1>
        <small>It&apos;s awesome - try it!</small>
      </header>
      <main role="main">
        <h1>There should be a long text here about how awesome it is...</h1>
      </main>
    </>
  );
};
