import {
  connectRouter,
  CALL_HISTORY_METHOD as CHM,
  LOCATION_CHANGE as LC,
} from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { TypedEpic } from '../index';

// Init
export const routerHistory =
  typeof window !== 'undefined' ? createBrowserHistory() : createMemoryHistory();

// Types
export enum ActionTypes {
  LOCATION_CHANGE = LC as any,
  CALL_HISTORY_METHOD = CHM as any,
}

// Actions
export const actions = {};

// Reducers
export const reducers = connectRouter(routerHistory);

// Epics
export const epics: TypedEpic[] = [];
