import { ActionType, createReducer, createStandardAction, getType } from 'typesafe-actions';
import { TypedEpic } from '../index';

// Types
export enum Actions {
  OFFLINE_ENABLED = 'varan/offline/ENABLED',
  OFFLINE_DISABLED = 'varan/offline/DISABLED',
  OFFLINE_CACHE_ENABLE = 'varan/offline/CACHE_ENABLE',
  OFFLINE_CACHE_ENABLED = 'varan/offline/CACHE_ENABLED',
  OFFLINE_CACHE_CHECK = 'varan/offline/CACHE_CHECK',
  OFFLINE_CACHE_UPDATED = 'varan/offline/CACHE_UPDATED',
  OFFLINE_CACHE_DISABLE = 'varan/offline/CACHE_DISABLE',
  OFFLINE_CACHE_DISABLED = 'varan/offline/CACHE_DISABLED',
}
interface State {
  isEnabled: boolean;
  isUpdated: boolean;
  isOffline: boolean;
  lastError: Error | null;
}

// Initial state
export const initialState: State = {
  isEnabled: false, // Is service worker enabled?
  isUpdated: false, // Has assets been updated in the background and reload is necessary?
  isOffline: true,
  lastError: null,
};

// Actions
export const actions = {
  setOffline: createStandardAction(Actions.OFFLINE_ENABLED)(),
  setOnline: createStandardAction(Actions.OFFLINE_DISABLED)(),
  cacheEnable: createStandardAction(Actions.OFFLINE_CACHE_ENABLE)(),
  cacheEnabled: createStandardAction(Actions.OFFLINE_CACHE_ENABLED)(),
  cacheCheck: createStandardAction(Actions.OFFLINE_CACHE_CHECK)(),
  cacheUpdated: createStandardAction(Actions.OFFLINE_CACHE_UPDATED)(),
  cacheDisable: createStandardAction(Actions.OFFLINE_CACHE_DISABLE)(),
  cacheDisabled: createStandardAction(Actions.OFFLINE_CACHE_DISABLED)(),
};

// Reducers
export const reducers = createReducer<State, ActionType<typeof actions>>(initialState, {})
  .handleAction(getType(actions.setOffline), state => ({ ...state, state: { isOffline: true } }))
  .handleAction(getType(actions.setOnline), state => ({ ...state, state: { isOffline: false } }))
  .handleAction(getType(actions.cacheEnabled), state => ({ ...state, state: { isEnabled: true } }))
  .handleAction(getType(actions.cacheDisabled), state => ({
    ...state,
    state: { isEnabled: false },
  }))
  .handleAction(getType(actions.cacheUpdated), state => ({ ...state, state: { isUpdated: true } }));

// Epics
export const epics: TypedEpic[] = [];
