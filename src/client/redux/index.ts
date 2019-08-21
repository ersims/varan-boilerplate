import { Action, combineReducers } from 'redux';
import { Epic } from 'redux-observable';
import { mapValues } from 'lodash';
import { Reducer } from 'typesafe-actions';

// Modules
import * as offline from './modules/offline';
import * as router from './modules/router';
import * as services from '../services';

// Types
interface DuckModule {
  Actions: object;
  actions: object;
  reducers: Reducer<any, any>;
  epics: Epic[];
}
export const STATE_RESET = 'varan/STATE_RESET';

// Init
const modules = {
  offline,
  router,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addedToGiveBetterTypeWarningsIfAReduxModuleIsMissingRequiredExports: { [key: string]: DuckModule } = modules;
const extract = <K extends keyof DuckModule>(key: K): { [P in keyof typeof modules]: typeof modules[P][K] } =>
  mapValues(modules, v => (v as any)[key]);

// Exports
export const { routerHistory } = router;
export const actionCreators = { ...extract('actions') };
export const reducers = { ...extract('reducers') };
export const epics = { ...extract('epics') };
const appReducer = combineReducers(reducers);
export const rootReducer: Reducer<ReturnType<typeof appReducer>, Action<Actions>> = (state, action) => {
  if (action.type === STATE_RESET) {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return appReducer(state, action);
};

// Types
export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = typeof actionCreators;
// export type Actions = { [P in keyof typeof modules]: typeof modules[P]['Actions'] };
export type Actions = any;
export type TypedEpic = Epic<Action<Actions>, Action<Actions>, RootState, typeof services>;
