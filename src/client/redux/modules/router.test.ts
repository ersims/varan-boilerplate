import { LOCATION_CHANGE } from 'connected-react-router';
import { reducers } from './router';

// Tests
describe('reducers', () => {
  it('should have correct initial state', () => {
    // Assertions
    expect(reducers(undefined, {} as any)).toEqual({
      action: 'POP',
      location: { pathname: '/', search: '', hash: '', state: undefined, query: {} },
    });
  });
  describe('LOCATION_CHANGE', () => {
    it('should not mutate state', () => {
      const state = {
        action: 'POP' as 'POP',
        location: { pathname: '/', search: '', hash: '', state: undefined, query: {} },
      };

      // Run action to update state
      const newState = reducers(state, {
        type: LOCATION_CHANGE,
        payload: {
          isFirstRendering: false,
          action: 'PUSH',
          location: {
            pathname: '/new-page',
            search: '',
            hash: '',
            state: undefined,
            key: 'random-key',
          },
        },
      });

      // Assertions
      expect(state).toEqual({
        action: 'POP',
        location: { pathname: '/', search: '', hash: '', state: undefined, query: {} },
      });
      expect(newState).not.toBe(state);
    });
    it('should update state with new location', () => {
      const state = {
        action: 'POP' as 'POP',
        location: { pathname: '/', search: '', hash: '', state: undefined, query: {} },
      };

      // Run action to update state
      const newState = reducers(state, {
        type: LOCATION_CHANGE,
        payload: {
          isFirstRendering: false,
          action: 'PUSH',
          location: {
            pathname: '/new-page',
            search: '',
            hash: '',
            state: undefined,
            key: 'random-key',
          },
        },
      });

      // Assertions
      expect(newState).toEqual({
        action: 'PUSH',
        location: {
          pathname: '/new-page',
          search: '',
          hash: '',
          state: undefined,
          query: {},
          key: 'random-key',
        },
      });
    });
  });
});
