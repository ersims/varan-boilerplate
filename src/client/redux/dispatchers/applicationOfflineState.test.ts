import { actionCreators } from '../modules/application';
import { applicationOfflineState } from './applicationOfflineState';

// Mocks
jest.mock('../modules/application', () => ({
  actionCreators: {
    setOnline: jest.fn(() => 'setOnlineMock'),
    setOffline: jest.fn(() => 'setOfflineMock'),
  },
}));

// Tests
beforeEach(jest.clearAllMocks);
it('should return callback to clean up event listeners', () => {
  const store = { dispatch: jest.fn() };

  // Subscribe
  const cleanup = applicationOfflineState(store);

  // Cleanup
  cleanup();

  // Dispatch events
  window.dispatchEvent(new Event('online'));
  window.dispatchEvent(new Event('offline'));

  // Assertions
  expect(actionCreators.setOnline).not.toHaveBeenCalled();
  expect(actionCreators.setOffline).not.toHaveBeenCalled();
  expect(store.dispatch).not.toHaveBeenCalled();
});

it('should dispatch setOnline when window emits `online`', () => {
  const store = { dispatch: jest.fn() };

  // Subscribe
  const cleanup = applicationOfflineState(store);

  // Dispatch online event
  window.dispatchEvent(new Event('online'));

  // Cleanup
  cleanup();

  // Assertions
  expect(actionCreators.setOnline).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith('setOnlineMock');
});
it('should dispatch setOffline when window emits `offline`', () => {
  const store = { dispatch: jest.fn() };

  // Subscribe
  const cleanup = applicationOfflineState(store);

  // Dispatch offline event
  window.dispatchEvent(new Event('offline'));

  // Cleanup
  cleanup();

  // Assertions
  expect(actionCreators.setOffline).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith('setOfflineMock');
});
