import * as redux from 'redux';
import * as reduxLogger from 'redux-logger';
import * as immutableMiddleware from 'redux-immutable-state-invariant';
import { createStore } from './createStore';
import { routerHistory } from '../lib/routerHistory';
import { initialState as initialApplicationState } from './modules/application';
import { initialState as initialRouterState } from './modules/router';

// Mocks
jest.mock('../lib/routerHistory', () => ({
  routerHistory: 'routerHistory',
}));

// Init
const orgEnv = process.env;

// Tests
beforeEach(() => {
  jest.restoreAllMocks();
  process.env = { ...orgEnv };
});
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
describe('middlewares', () => {
  describe('redux-logger', () => {
    it('should be added in development mode', () => {
      process.env.NODE_ENV = 'development';
      const mockLogger: redux.Middleware = () => (next) => (action) => next(action);
      const loggerSpy = jest.spyOn(reduxLogger, 'createLogger').mockReturnValue(mockLogger);
      const reduxSpy = jest.spyOn(redux, 'applyMiddleware');
      createStore();

      // Assertions
      expect(loggerSpy).toHaveBeenCalled();
      expect(reduxSpy.mock.calls[0]).toEqual(expect.arrayContaining([mockLogger]));
    });
    it('should not be added in production mode', () => {
      process.env.NODE_ENV = 'production';
      const mockLogger: redux.Middleware = () => (next) => (action) => next(action);
      const loggerSpy = jest.spyOn(reduxLogger, 'createLogger').mockReturnValue(mockLogger);
      const reduxSpy = jest.spyOn(redux, 'applyMiddleware');
      createStore();

      // Assertions
      expect(loggerSpy).not.toHaveBeenCalled();
      expect(reduxSpy.mock.calls[0]).not.toEqual(expect.arrayContaining([mockLogger]));
    });
    it('should collapse non-error actions', () => {
      const loggerSpy = jest.spyOn(reduxLogger, 'createLogger');
      const { store } = createStore();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const collapseFn = loggerSpy.mock.calls[0][0]!.collapsed as reduxLogger.LoggerPredicate;

      // Assertions
      expect(collapseFn).not.toBeUndefined();
      expect(collapseFn(store.getState, { payload: true })).toBe(true);
    });
    it('should not collapse error actions', () => {
      const loggerSpy = jest.spyOn(reduxLogger, 'createLogger');
      const { store } = createStore();

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const collapseFn = loggerSpy.mock.calls[0][0]!.collapsed as reduxLogger.LoggerPredicate;

      // Assertions
      expect(collapseFn).not.toBeUndefined();
      expect(collapseFn(store.getState, { error: true })).toBe(false);
      expect(collapseFn(store.getState, { payload: new Error() })).toBe(false);
      expect(collapseFn(store.getState, { payload: true }, { error: () => new Error() })).toBe(
        false,
      );
    });
  });
  describe('immutableStateInvariantMiddlewarer', () => {
    it('should be added in development mode', () => {
      process.env.NODE_ENV = 'development';
      const mockImmutableMiddleware: redux.Middleware = () => (next) => (action) => next(action);
      const immutableSpy = jest
        .spyOn(immutableMiddleware, 'default')
        .mockReturnValue(mockImmutableMiddleware);
      const reduxSpy = jest.spyOn(redux, 'applyMiddleware');
      createStore();

      // Assertions
      expect(immutableSpy).toHaveBeenCalled();
      expect(reduxSpy.mock.calls[0]).toEqual(expect.arrayContaining([mockImmutableMiddleware]));
    });
    it('should not be added in production mode', () => {
      process.env.NODE_ENV = 'production';
      const mockImmutableMiddleware: redux.Middleware = () => (next) => (action) => next(action);
      const immutableSpy = jest
        .spyOn(immutableMiddleware, 'default')
        .mockReturnValue(mockImmutableMiddleware);
      const reduxSpy = jest.spyOn(redux, 'applyMiddleware');
      createStore();

      // Assertions
      expect(immutableSpy).not.toHaveBeenCalled();
      expect(reduxSpy.mock.calls[0]).not.toEqual(expect.arrayContaining([mockImmutableMiddleware]));
    });
  });
});
