// Polyfills
import 'focus-visible';

import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { HelmetProvider } from 'react-helmet-async';
import { store, history } from './redux/store';
import { App } from './components/App/App';

// Global Styles
import 'normalize.css';
import './styles/global.scss';

// Render app
const render = () =>
  hydrate(
    <Provider store={store}>
      <HelmetProvider>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </HelmetProvider>
    </Provider>,
    document.getElementById('root'),
  );
render();

// Enable hot reloading
if (module.hot) module.hot.accept('./components/App/App', render);
