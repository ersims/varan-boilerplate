import createStore from './createStore';

// Init
const { store, history } = createStore(
  // eslint-disable-next-line no-underscore-dangle
  '__INITIAL_REDUX_STATE__' in window ? (window as any).__INITIAL_REDUX_STATE__ : undefined,
);

// Hot reload store
// eslint-disable-next-line global-require
const reloadStore = () => store.replaceReducer(require('./index').rootReducer);
// TODO: Improve hot reload integration
if (module.hot) {
  module.hot.accept('./createStore', reloadStore);
  module.hot.accept('./index', reloadStore);
}

// Exports
export { store, history };
