import { Action, combineReducers } from 'redux';
import { combineEpics, Epic } from 'redux-observable';
import mapValues from 'lodash/mapValues';
import pickBy from 'lodash/pickBy';
import * as services from '../../../../../src/client/services';
import * as router from './modules/router';
import * as application from './modules/application';

// Register modules
const modules = {
  application,
  router,
};

// Exports
export const rootReducer = combineReducers(
  mapValues(
    pickBy(modules, (v: any) => !!v.reducers),
    (v: any) => v.reducers,
  ) as {
    [Q in {
      [P in keyof typeof modules]: typeof modules[P] extends { reducers: any } ? P : never;
    }[keyof typeof modules]]: typeof modules[Q]['reducers'];
  },
);
export const rootEpic = combineEpics(
  ...Object.values(
    mapValues(
      pickBy(modules, (v: any) => !!v.epics),
      (v: any) => v.epics,
    ),
  ).reduce<TypedEpic[]>((acc, cur) => acc.concat(Object.values(cur)), []),
);

// Types
export type RootState = ReturnType<typeof rootReducer>;
export type TypedEpic<CustomState = RootState, CustomDependencies = typeof services> = Epic<
  Action<ActionTypes>,
  Action<ActionTypes>,
  CustomState,
  CustomDependencies
>;
export type ActionTypes = {
  [Q in {
    [P in keyof typeof modules]: typeof modules[P] extends { ActionTypes: any } ? P : never;
  }[keyof typeof modules]]: typeof modules[Q]['ActionTypes'];
};
