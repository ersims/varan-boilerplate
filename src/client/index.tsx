import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { compose } from 'recompose';
import { ConnectedRouter } from 'connected-react-router';
import { withRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import { history, store } from './redux/store';
import { App } from './components/App';

// Styles
import './styles/index.scss';

// Init
// TODO: Fixme
const EnhancedApp = withRouter<any, any>(compose()(App));

// Render app and perform necessary housekeeping
const render = () =>
  hydrate(
    <Provider store={store}>
      <HelmetProvider>
        <ConnectedRouter history={history}>
          <EnhancedApp />
        </ConnectedRouter>
      </HelmetProvider>
    </Provider>,
    document.getElementById('root'),
  );
render();

// Enable hot reloading
if (module.hot) module.hot.accept('./components/App', render);
