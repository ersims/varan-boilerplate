// Dependencies
import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { History } from 'history';

// Modules
import application, { actions as applicationActions, epics as applicationEpics } from './modules/application';
import offline, { actions as offlineActions, epics as offlineEpics } from './modules/offline';
import router, { actions as routerActions, epics as routerEpics } from './modules/router';

// Exports
export const actionCreators = Object.assign(
  {},
  {
    applicationActions,
    offlineActions,
    routerActions,
  },
);
export const reducers = (history: History) =>
  Object.assign(
    {},
    {
      application,
      offline,
      router: router(history),
    },
  );
export const rootReducer = (history: History) => combineReducers(reducers(history));
export const epics = Object.assign(
  {},
  {
    applicationEpics,
    offlineEpics,
    routerEpics,
  },
);

// Types
export type RootState = StateType<ReturnType<typeof rootReducer>>;
