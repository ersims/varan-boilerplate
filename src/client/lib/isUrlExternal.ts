// Exports
export const isUrlExternal = (url: string | Record<string, unknown>): url is string =>
  typeof url === 'string' &&
  (url.startsWith('//') ||
    url.startsWith('tel:') ||
    url.startsWith('mailto:') ||
    /^\w+:\/\//i.test(url));
