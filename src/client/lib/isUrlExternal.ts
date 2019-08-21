// Exports
export const isUrlExternal = (url: string) => url.startsWith('//') || /^\w+:\/\//i.test(url);
