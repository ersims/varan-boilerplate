import { createStore } from './createStore';

// Init
const { store, history } = createStore(
  // eslint-disable-next-line no-underscore-dangle
  '__INITIAL_REDUX_STATE__' in window ? (window as any).__INITIAL_REDUX_STATE__ : undefined,
);

// Exports
export { store, history };
