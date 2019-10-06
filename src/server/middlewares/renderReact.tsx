import React from 'react';
import { RequestHandler } from 'express';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { HelmetProvider, FilledContext } from 'react-helmet-async';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { createLocation } from 'history';
import createStore from '../../client/redux/createStore';
import { App } from '../../client/components/App';
import Html from '../components/Html';

// Types
interface ApplicationStats {
  assetsByChunkName: {
    [bundle: string]: string | string[];
  };
}
interface ApplicationAsset {
  src: string;
  integrity?: string;
}
interface ApplicationAssets {
  [file: string]: ApplicationAsset;
}

// Add hot reloading
if (module.hot) module.hot.accept('../../client/components/App', () => {});

// Exports
export default (stats: ApplicationStats, assets: ApplicationAssets, preload: string[] = []): RequestHandler => {
  // Load bundles list
  const { bundleJs, bundleCss } = Object.entries(stats.assetsByChunkName).reduce<{
    bundleJs: ApplicationAsset[];
    bundleCss: ApplicationAsset[];
  }>(
    (acc, [k, v]) => {
      (Array.isArray(v) ? v : [v]).forEach(f => {
        if (f.endsWith('.js')) acc.bundleJs.push(assets[`${k}.js`]);
        else if (f.endsWith('.css')) acc.bundleCss.push(assets[`${k}.css`]);
      });
      return acc;
    },
    { bundleJs: [], bundleCss: [] },
  );

  // Fetch preloaded assets
  const preloadedAssets = preload.map(f => assets[f]);

  // Find manifest
  let manifest: ApplicationAsset | string | undefined = Object.keys(assets).find(k =>
    /^manifest\.[a-f0-9]+\.json/.test(k),
  );
  if (manifest) manifest = assets[manifest];

  // Return react rendering middleware
  return function renderReact(req, res) {
    // Prepare
    const initialState = { offline: { isOffline: false } };
    const { store } = createStore({ ...initialState, router: { location: createLocation(req.originalUrl) } });
    // TODO: Improve hot reload integration
    if (process.env.NODE_ENV === 'development' && module.hot) {
      // eslint-disable-next-line global-require
      const reloadStore = () => store.replaceReducer(require('../../client/redux/index').rootReducer);
      module.hot.accept('../../client/redux/createStore', reloadStore);
      module.hot.accept('../../client/redux/index', reloadStore);
    }

    // Render
    const helmetContext = {};
    const routerContext: {
      url?: string;
      statusCode?: number;
    } = {};
    const body = renderToString(
      <Provider store={store}>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={req.url} context={routerContext}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </Provider>,
    );
    const { helmet } = helmetContext as FilledContext;
    const html = `<!DOCTYPE html>${renderToStaticMarkup(
      <Html
        htmlAttributes={helmet.htmlAttributes.toComponent()}
        bodyAttributes={helmet.bodyAttributes.toComponent()}
        title={helmet.title.toComponent()}
        meta={helmet.meta.toComponent()}
        link={helmet.link.toComponent()}
        style={helmet.style.toComponent()}
        script={helmet.script.toComponent()}
        noscript={helmet.noscript.toComponent()}
        base={helmet.base.toComponent()}
        body={body}
        bundleJs={bundleJs}
        bundleCss={bundleCss}
        manifest={manifest}
        preload={preloadedAssets}
        initialState={initialState}
      />,
    )}`;

    if (routerContext.url) {
      if (routerContext.statusCode !== undefined) res.status(routerContext.statusCode);
      res.redirect(routerContext.url);
      return;
    }
    if (routerContext.statusCode) res.status(routerContext.statusCode);
    res.send(html);
  };
};
