import { createStore } from './createStore';
import { routerHistory } from '../lib/routerHistory';
import { initialState as initialApplicationState } from './modules/application';
import { initialState as initialRouterState } from './modules/router';

// Mocks
jest.mock('../lib/routerHistory', () => ({
  routerHistory: 'routerHistory',
}));

// Tests
it('should create a store with correct initial state', () => {
  const { store } = createStore();

  // Assertions
  expect(store.getState()).toEqual({
    application: initialApplicationState,
    router: initialRouterState,
  });
});
it('should accept initial state as argument', () => {
  const { store } = createStore({ application: { dummyProp: true } });

  // Assertions
  expect(store.getState()).toEqual({
    application: { dummyProp: true },
    router: initialRouterState,
  });
});
it('should use routerHistory and return it', () => {
  const { history } = createStore();

  // Assertions
  expect(history).toBe(routerHistory);
  expect(history).toBe('routerHistory');
});
