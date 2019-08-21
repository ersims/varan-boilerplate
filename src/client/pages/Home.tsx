import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Features } from '../components/Features';
import { GettingStarted } from '../components/GettingStarted';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title itemProp="name" lang="en">
          Welcome to varan
        </title>
      </Helmet>
      <header className="header header--main">
        <div className="header__hero">
          <h1 className="header__title">varan</h1>
          <small className="header__subtitle">modern webdev made simple</small>
          <p className="header__description">
            The simple starting point for creating modern high performance web applications.
          </p>
        </div>
      </header>
      <main role="main" className="main main--content">
        <Features />
        <GettingStarted />
        <div className="region region--secondary">
          <section className="section section__grid section__grid--2">
            <div className="section__block">
              <h2>Useful scripts</h2>
              <h3>npm run start:watch</h3>
              <p>Start project in development mode</p>
              <h3>npm run build</h3>
              <p>Create a production build</p>
              <h3>npm run build:analyze</h3>
              <p>Get a detailed build analysis</p>
              <h3>npm run start</h3>
              <p>Start a production build</p>
            </div>
            <div className="section__block">
              <h2>Customization</h2>
              <h3>Polyfill and browser support</h3>
              <p>
                This boilerplate uses <a href="https://github.com/ersims/varan">varan</a> which adds some basic
                polyfills for IE11 automatically. Other necessary polyfills are added automatically depending on your
                usage of new features and your browser targets.
              </p>
              <p>
                You can edit the browsers you want to target using{' '}
                <a href="https://github.com/browserslist/browserslist">Browserslist</a>. By default the list is
                maintained in your <span className="highlight highlight--inline highlight--path">package.json</span>{' '}
                file and targets a sensible default.
              </p>
              <h3>Custom webpack config</h3>
              <p>
                You can easily customize or bring your own webpack configurations. See the documentation on how to do
                this over at the <a href="https://github.com/ersims/varan">varan repository</a>.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};
