import { Action, applyMiddleware, createStore as reduxCreateStore, Middleware, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';
import { ActionTypes, epics, rootReducer, RootState, routerHistory } from './index';
import * as services from '../services';

// Init
const rootEpic = combineEpics(...Object.values(epics).reduce((acc, cur) => acc.concat(cur), []));
const loggerMiddleware =
  typeof window !== 'undefined' &&
  createLogger({
    collapsed: (getState, action, logEntry) =>
      (!logEntry || !logEntry.error) &&
      !action.error &&
      !action.isError &&
      !(action.payload instanceof Error),
    predicate: () => process.env.NODE_ENV !== 'production',
  });
const composeEnhancers = composeWithDevTools({ serialize: true });

// Exports
/**
 * Create redux store with initial state
 *
 * @param {{}} initialState
 * @returns {{ store: Store, history: History }}
 */
export default (initialState = {}): { store: Store; history: History } => {
  const epicMiddleware = createEpicMiddleware<
    Action<ActionTypes>,
    Action<ActionTypes>,
    RootState,
    typeof services
  >({
    dependencies: services,
  });
  const enhancer = composeEnhancers(
    applyMiddleware(
      ...([routerMiddleware(routerHistory), epicMiddleware, loggerMiddleware].filter(
        Boolean,
      ) as Middleware[]),
    ),
  );
  const store = reduxCreateStore(rootReducer, initialState, enhancer);
  epicMiddleware.run(rootEpic);
  return { store, history: routerHistory };
};
