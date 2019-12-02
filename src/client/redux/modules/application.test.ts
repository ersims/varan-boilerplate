import { ActionTypes, actionCreators, reducers, isApplicationOfflineSelector } from './application';

// Tests
describe('actionCreators', () => {
  describe('setOnline', () => {
    it('should create action to set application state online', () => {
      const expectedAction = { type: ActionTypes.APPLICATION_SET_ONLINE };

      // Assertions
      expect(actionCreators.setOnline()).toEqual(expectedAction);
    });
  });
  describe('setOffline', () => {
    it('should create action to set application state offline', () => {
      const expectedAction = { type: ActionTypes.APPLICATION_SET_OFFLINE };

      // Assertions
      expect(actionCreators.setOffline()).toEqual(expectedAction);
    });
  });
});
describe('reducers', () => {
  it('should have correct initial state', () => {
    // Assertions
    expect(reducers(undefined, { type: 'dummyaction' } as any)).toEqual({
      isOffline: true,
    });
  });
  describe('APPLICATION_SET_ONLINE', () => {
    it('should not mutate state', () => {
      const state = { isOffline: true };

      // Run action to update state
      const newState = reducers(state, { type: ActionTypes.APPLICATION_SET_ONLINE });

      // Assertions
      expect(state).toEqual({ isOffline: true });
      expect(newState).not.toBe(state);
    });
    it('should set application state to online', () => {
      const state = { isOffline: true };

      // Run action to update state
      const newState = reducers(state, { type: ActionTypes.APPLICATION_SET_ONLINE });

      // Assertions
      expect(newState).toEqual({ isOffline: false });
    });
  });
  describe('APPLICATION_SET_OFFLINE', () => {
    it('should not mutate state', () => {
      const state = { isOffline: false };

      // Run action to update state
      const newState = reducers(state, { type: ActionTypes.APPLICATION_SET_OFFLINE });

      // Assertions
      expect(state).toEqual({ isOffline: false });
      expect(newState).not.toBe(state);
    });
    it('should set application state to offline', () => {
      const state = { isOffline: false };

      // Run action to update state
      const newState = reducers(state, { type: ActionTypes.APPLICATION_SET_OFFLINE });

      // Assertions
      expect(newState).toEqual({ isOffline: true });
    });
  });
});
describe('selectors', () => {
  describe('isApplicationOfflineSelector', () => {
    it('should return correct state', () => {
      // Assertions
      expect(isApplicationOfflineSelector({ application: { isOffline: true } })).toBe(true);
      expect(isApplicationOfflineSelector({ application: { isOffline: false } })).toBe(false);
    });
  });
});
