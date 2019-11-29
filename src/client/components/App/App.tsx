import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Helmet } from 'react-helmet-async';
import { Route, Switch, useLocation } from 'react-router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import favicon from '../../../assets/favicon.ico';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

// Styles
import classes from './App.module.scss';

// Manifests
import webmanifest from '../../../assets/manifest.webmanifest';

// Pages
import { Home } from '../../pages/Home/Home';
import { Examples } from '../../pages/Examples/Examples';
import { NotFound } from '../../pages/errors/NotFound/NotFound';

// Exports
export const App = hot(() => {
  const location = useLocation();
  return (
    <div className={classes.app}>
      <Helmet titleTemplate="%s | Varan">
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="A varan react starter app" />
        <meta name="og:type" content="website" />
        <meta name="theme-color" content="#59C3C3" />
        <link rel="icon" href={favicon} />
        <link rel="manifest" href={webmanifest} />
      </Helmet>
      <Navbar />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames={{
            enterActive: classes.appPageContentEnterActive,
            exitActive: classes.appPageContentExitActive,
          }}
          timeout={200}
          className={classes.appPageContent}
        >
          <div className={classes.appPageContent}>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/examples" component={Examples} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
});
