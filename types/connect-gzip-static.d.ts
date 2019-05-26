/*
 * Types for connect-gzip
 */
declare module 'connect-gzip-static' {
  import * as express from 'express';
  // eslint-disable-next-line import/no-extraneous-dependencies
  import * as serve from 'serve-static';

  function gzipStatic(root: string, options?: serve.ServeStaticOptions): express.Handler;
  export default gzipStatic;
}
