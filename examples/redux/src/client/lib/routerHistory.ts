import { createBrowserHistory, createMemoryHistory } from 'history';

// Exports
export const routerHistory =
  typeof window !== 'undefined' ? createBrowserHistory() : createMemoryHistory();
