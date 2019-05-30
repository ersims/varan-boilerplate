import * as React from 'react';
import serialize from 'serialize-javascript';

// Interface
interface HtmlProps {
  title: React.ReactNode;
  meta: React.ReactNode;
  link: React.ReactNode;
  style: React.ReactNode;
  script: React.ReactNode;
  noscript: React.ReactNode;
  base: React.ReactNode;
  htmlAttributes: object;
  bodyAttributes: object;
  bundleJs: string[];
  bundleCss: string[];
  body: string;
  initialState?: object;
  manifest?: string;
  preload: string[];
}

class Html extends React.PureComponent<HtmlProps> {
  public static defaultProps = {
    htmlAttributes: {},
    bodyAttributes: {},
    body: '',
    preload: [],
  };
  public render() {
    const {
      htmlAttributes,
      bodyAttributes,
      title,
      meta,
      link,
      style,
      script,
      noscript,
      base,
      body,
      bundleJs,
      bundleCss,
      initialState,
      manifest,
      preload,
    } = this.props;
    return (
      <html lang="en" {...htmlAttributes}>
        <head>
          {title}
          {meta}
          {noscript}
          {base}
          {manifest && <link rel="manifest" href={manifest} />}
          {link}
          {preload.map(file => {
            if (/\.js$/.test(file)) return <link key={file} href={file} rel="preload" as="script" />;
            if (/\.css$/.test(file)) return <link key={file} href={file} rel="preload" as="style" />;
            if (/(\.woff|\.woff2|\.eot|\.ttf)$/.test(file))
              return <link key={file} href={file} rel="preload" as="font" crossOrigin="anonymous" />;
            if (/(\.png|\.jpe?g|\.gif)$/.test(file))
              return <link key={file} href={file} rel="preload" as="image" crossOrigin="anonymous" />;
            return null;
          })}
          {bundleCss.map(css => (
            <link key={css} href={css} rel="stylesheet" />
          ))}
          {style}
          {script}
        </head>
        <body {...bodyAttributes}>
          {/* eslint-disable-next-line react/no-danger */}
          <div id="root" dangerouslySetInnerHTML={{ __html: body }} />
          {initialState && (
            <script
              id="initial-state"
              type="text/javascript"
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{
                __html: `window.__INITIAL_REDUX_STATE__ = ${serialize(initialState, { isJSON: true })}`,
              }}
            />
          )}
          {bundleJs.map(js => (
            <script key={js} type="text/javascript" src={js} defer />
          ))}
        </body>
      </html>
    );
  }
}

export default Html;
