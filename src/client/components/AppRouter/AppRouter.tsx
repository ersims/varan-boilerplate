import React, { FunctionComponent } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { NotFoundError } from '../../pages/errors/NotFoundError/NotFoundError';

// Pages
import { Home } from '../../pages/Home/Home';
import { Examples } from '../../pages/Examples/Examples';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

// Exports
export const AppRouter: FunctionComponent = () => {
  const location = useLocation();
  return (
    <ErrorBoundary key={location.key}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/examples" component={Examples} />
        <Route component={NotFoundError} />
      </Switch>
      <Footer />
    </ErrorBoundary>
  );
};
