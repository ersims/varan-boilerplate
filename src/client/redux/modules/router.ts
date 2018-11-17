// Imports
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { Epic } from 'redux-observable';

// Actions
export const actions = {};

// Reducers
export default (history: History) => connectRouter(history);

// Epics
export const epics: Epic[] = [];
