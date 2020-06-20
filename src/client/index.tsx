// Polyfills
import 'focus-visible';

import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { App } from './components/App/App';

// Global Styles
import 'normalize.css';
import './styles/global.scss';

// Render app
const render = () =>
  hydrate(
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>,
    document.getElementById('root'),
  );
render();

// Enable hot reloading
if (module.hot) module.hot.accept('./components/App/App', render);
