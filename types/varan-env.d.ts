declare namespace NodeJS {
  interface ProcessEnv {
    BABEL_ENV: 'development' | 'production' | 'test';
    NODE_ENV: 'development' | 'production' | 'test';
    BUILD_TARGET: 'server' | 'client';
    browser?: 'true';
    VARAN_CLIENT_ROOT?: string;
    VARAN_STATS_MANIFEST?: string;
    VARAN_ASSETS_MANIFEST?: string;
  }
}

declare module '*.ico' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
declare module '*.webmanifest' {
  const src: string;
  export default src;
}
declare module '*.xml' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
