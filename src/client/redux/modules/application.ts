import { ActionType, createAction, createReducer } from 'typesafe-actions';
import { createSelector } from 'reselect';

/**
 * ActionTypes
 */
export enum ActionTypes {
  APPLICATION_SET_OFFLINE = 'varan/application/SET_OFFLINE',
  APPLICATION_SET_ONLINE = 'varan/application/SET_ONLINE',
}

/**
 * State
 */
interface ApplicationState {
  isOffline: boolean;
}
export const initialState: Readonly<ApplicationState> = {
  isOffline: true,
};

/**
 * ActionCreators
 */
export const actionCreators = {
  setOffline: createAction(ActionTypes.APPLICATION_SET_OFFLINE)(),
  setOnline: createAction(ActionTypes.APPLICATION_SET_ONLINE)(),
};

/**
 * Reducers
 */
export const reducers = createReducer<ApplicationState, ActionType<typeof actionCreators>>(
  initialState,
)
  .handleAction(actionCreators.setOffline, state => ({ ...state, isOffline: true }))
  .handleAction(actionCreators.setOnline, state => ({ ...state, isOffline: false }));

/**
 * Epics
 */
export const epics = {};

/**
 * Selectors
 */
export const isApplicationOfflineSelector = createSelector<
  { application: ApplicationState },
  boolean,
  boolean
>(
  ({ application: { isOffline } }) => isOffline,
  isOffline => isOffline,
);
