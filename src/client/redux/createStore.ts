import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware } from 'redux-observable';
import { Action, applyMiddleware, createStore as reduxCreateStore, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import { History } from 'history';
import { rootEpic, rootReducer, ActionTypes, RootState } from './index';
import * as services from '../services';
import { routerHistory } from '../lib/routerHistory';
import { applicationOfflineState } from './dispatchers/applicationOfflineState';

// Exports
/**
 * Create redux store with initial state
 *
 * @param {{}} preloadedState
 * @returns {{ store: Store, history: History }}
 */
export const createStore = (preloadedState = {}): { store: Store; history: History } => {
  const composeEnhancers = composeWithDevTools({ serialize: true });
  const epicMiddleware = createEpicMiddleware<
    Action<ActionTypes>,
    Action<ActionTypes>,
    RootState,
    typeof services
  >({
    dependencies: services,
  });

  // Create middlewares
  const enhancer = composeEnhancers(
    applyMiddleware(
      ...([
        // connected-react-router
        routerMiddleware(routerHistory),

        // redux-observables
        epicMiddleware,

        /*
         * Development only middlewares
         */
        // Check for mutation in reducers
        process.env.NODE_ENV !== 'production' && immutableStateInvariantMiddleware(),

        // Logging
        process.env.NODE_ENV !== 'production' &&
          createLogger({
            collapsed: (getState, action, logEntry) =>
              (!logEntry || !logEntry.error) && !action.error && !(action.payload instanceof Error),
          }),
      ].filter(Boolean) as Middleware[]),
    ),
  );

  // Create store
  const store = reduxCreateStore(rootReducer, preloadedState, enhancer);

  // Enable hot reloading
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./index', () => {
      // eslint-disable-next-line global-require
      store.replaceReducer(require('./index').rootReducer);
    });
  }

  // Run epics
  epicMiddleware.run(rootEpic);

  // Subscribe dispatchers if we are in browser mode
  if (typeof window !== 'undefined') {
    applicationOfflineState(store);
  }

  return { store, history: routerHistory };
};
