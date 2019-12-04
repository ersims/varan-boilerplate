import * as React from 'react';
import serialize from 'serialize-javascript';

// Interface
export interface Asset {
  src: string;
  integrity?: string;
}
export interface HtmlProps {
  title: React.ReactNode;
  meta: React.ReactNode;
  link: React.ReactNode;
  style: React.ReactNode;
  script: React.ReactNode;
  noscript: React.ReactNode;
  base: React.ReactNode;
  htmlAttributes: object;
  bodyAttributes: object;
  bundleJs: (string | Asset)[];
  bundleCss: (string | Asset)[];
  body: string;
  initialState?: object;
  manifest?: string | Asset;
  preload: (string | Asset)[];
  baseUrl: string;
}

// Helpers
function isAssetObject(asset: string | Asset): asset is Asset {
  return typeof asset === 'object';
}

// Exports
export const Html = ({
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
  baseUrl,
}: HtmlProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <html lang="en" {...htmlAttributes}>
    <head>
      {baseUrl && <base href={baseUrl} />}
      {title}
      {meta}
      {noscript}
      {base}
      {manifest &&
        (isAssetObject(manifest) ? (
          <link
            rel="manifest"
            href={manifest.src}
            integrity={manifest.integrity}
            crossOrigin="anonymous"
          />
        ) : (
          <link rel="manifest" href={manifest} crossOrigin="anonymous" />
        ))}
      {link}
      {preload.map(asset => {
        const { src, integrity = undefined } = isAssetObject(asset) ? asset : { src: asset };
        if (/\.js$/.test(src)) {
          return (
            <link
              key={src}
              href={src}
              rel="preload"
              as="script"
              integrity={integrity}
              crossOrigin="anonymous"
            />
          );
        }
        if (/\.css$/.test(src)) {
          return (
            <link
              key={src}
              href={src}
              rel="preload"
              as="style"
              integrity={integrity}
              crossOrigin="anonymous"
            />
          );
        }
        if (/(\.woff|\.woff2|\.eot|\.ttf)$/.test(src)) {
          return (
            <link
              key={src}
              href={src}
              rel="preload"
              as="font"
              integrity={integrity}
              crossOrigin="anonymous"
            />
          );
        }
        if (/(\.png|\.jpe?g|\.gif)$/.test(src)) {
          return (
            <link
              key={src}
              href={src}
              rel="preload"
              as="image"
              integrity={integrity}
              crossOrigin="anonymous"
            />
          );
        }
        return null;
      })}
      {bundleCss.map(css =>
        isAssetObject(css) ? (
          <link
            key={css.src}
            integrity={css.integrity}
            href={css.src}
            rel="stylesheet"
            crossOrigin="anonymous"
          />
        ) : (
          <link key={css} href={css} rel="stylesheet" crossOrigin="anonymous" />
        ),
      )}
      {style}
      {script}
    </head>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <body {...bodyAttributes}>
      {/* eslint-disable-next-line react/no-danger */}
      <div id="root" dangerouslySetInnerHTML={{ __html: body }} />
      {initialState && (
        <script
          id="initial-state"
          type="text/javascript"
          /* eslint-disable-next-line react/no-danger */
          dangerouslySetInnerHTML={{
            __html: `window.__INITIAL_REDUX_STATE__ = ${serialize(initialState, {
              isJSON: true,
            })}`,
          }}
        />
      )}
      {bundleJs.map(js =>
        isAssetObject(js) ? (
          <script
            key={js.src}
            type="text/javascript"
            src={js.src}
            integrity={js.integrity}
            defer
            crossOrigin="anonymous"
          />
        ) : (
          <script key={js} type="text/javascript" src={js} defer crossOrigin="anonymous" />
        ),
      )}
    </body>
  </html>
);
Html.defaultProps = {
  htmlAttributes: {},
  bodyAttributes: {},
  body: '',
  preload: [],
  baseUrl: '/',
};
