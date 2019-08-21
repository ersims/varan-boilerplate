import { connectRouter, routerActions } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { TypedEpic } from '../index';

// Init
export const routerHistory = typeof window !== 'undefined' ? createBrowserHistory() : createMemoryHistory();

// Types
export const Actions = routerActions;

// Actions
export const actions = {};

// Reducers
export const reducers = connectRouter(routerHistory);

// Epics
export const epics: TypedEpic[] = [];
