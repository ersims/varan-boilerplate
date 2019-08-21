import React from 'react';
import { RequestHandler } from 'express';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { HelmetProvider, FilledContext } from 'react-helmet-async';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { createLocation } from 'history';
import { createStore } from '../../client/redux/createStore';
import { App } from '../../client/components/App/App';
import { Html } from '../components/Html';

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
if (module.hot) module.hot.accept('../../client/components/App/App', () => {});

// Init
function getApplicationAsset(asset: string | ApplicationAsset) {
  return typeof asset === 'string'
    ? { src: asset }
    : { src: asset.src, integrity: (!module.hot && asset.integrity) || undefined };
}

// Exports
export default (
  stats: ApplicationStats,
  assets: ApplicationAssets,
  preload: string[] = [],
): RequestHandler => {
  // Load assets
  const { bundleJs, bundleCss } = Object.entries(stats.assetsByChunkName).reduce<{
    bundleJs: ApplicationAsset[];
    bundleCss: ApplicationAsset[];
  }>(
    (acc, [k, v]) => {
      (Array.isArray(v) ? v : [v]).forEach(f => {
        if (f.endsWith('.js')) acc.bundleJs.push(getApplicationAsset(assets[`${k}.js`]));
        else if (f.endsWith('.css')) acc.bundleCss.push(getApplicationAsset(assets[`${k}.css`]));
      });
      return acc;
    },
    { bundleJs: [], bundleCss: [] },
  );

  // Fetch preloaded assets
  const preloadedAssets = preload.map(f => assets[f]);

  // Return react rendering middleware
  return function renderReact(req, res) {
    // Prepare
    const initialState = { application: { isOffline: false } };
    const { store } = createStore({
      ...initialState,
      router: { location: createLocation(req.originalUrl) },
    });

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
