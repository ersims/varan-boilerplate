// Init environment
import 'source-map-support/register';
import dotenv from 'dotenv';

dotenv.config();

/* eslint-disable import/first */
import express from 'express';
import compression from 'compression';
import fs from 'fs';
import path from 'path';
import gzipStatic from 'express-static-gzip';
import renderReact from '../middlewares/renderReact';
/* eslint-enable import/first */

// Hot reloading
if (module.hot) module.hot.accept('../middlewares/renderReact', () => {});

// Enable preloading of files that is highly likely to be used e.g fonts (will map to the webpack hashed file name)
const PRELOAD_FILES = [
  'static/media/open-sans-v15-latin-ext_latin-300.woff2',
  'static/media/open-sans-v15-latin-ext_latin-600.woff2',
  'static/media/open-sans-v15-latin-ext_latin-700.woff2',
  'static/media/open-sans-v15-latin-ext_latin-regular.woff2',
];

// Init
const app = express();
app.set('env', process.env.NODE_ENV || 'production');
app.set('host', process.env.HOST);
app.set('port', (process.env.PORT && parseInt(process.env.PORT, 10)) || 3000);
const CLIENT_FILES = path.resolve(__dirname, process.env.VARAN_CLIENT_ROOT || '../../client');
const CLIENT_FILES_CACHE_AGE = app.get('env') === 'production' ? 86400000 * 365 : undefined;
const stats =
  process.env.VARAN_STATS_MANIFEST &&
  JSON.parse(fs.readFileSync(path.resolve(__dirname, process.env.VARAN_STATS_MANIFEST)).toString());
const assets =
  process.env.VARAN_ASSETS_MANIFEST &&
  JSON.parse(fs.readFileSync(path.resolve(__dirname, process.env.VARAN_ASSETS_MANIFEST)).toString());

// Serve static files and attempt to serve .gz files if found
app.use('/service-worker.js', compression(), (req, res, next) => {
  res.setHeader('Cache-Control', 'max-age=0, no-cache, no-store, must-revalidate');
  return next();
});
app.use(
  gzipStatic(CLIENT_FILES, {
    index: false,
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    serveStatic: { maxAge: CLIENT_FILES_CACHE_AGE },
  }),
);

// Render react server side
app.use(compression());
app.get('*', renderReact(stats, assets, PRELOAD_FILES));

// Export server
export default app.listen(app.get('port'), app.get('host'), () => {
  if (process.send) process.send('ready');
  // eslint-disable-next-line no-console
  console.log(`Server listening on ${app.get('port')} in ${app.get('env')} mode`);
});
