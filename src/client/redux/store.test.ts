// Mocks
jest.mock('./createStore', () => ({
  createStore: jest.fn(() => ({ store: 'mockstore' })),
}));

// Tests
beforeEach(() => {
  jest.restoreAllMocks();
  jest.resetModules();
});
it('should use createStore', async done => {
  expect.assertions(3);

  // Imports
  const { createStore } = await import('./createStore');
  const { store } = await import('./store');

  // Assertions
  expect(createStore).toHaveBeenCalledTimes(1);
  expect(createStore).toHaveBeenCalledWith(undefined);
  expect(store).toBe('mockstore');

  // Done
  done();
});
it('should return the same store from multiple imports', async done => {
  expect.assertions(4);

  // Imports
  const { createStore } = await import('./createStore');
  const { store: store1 } = await import('./store');
  const { store: store2 } = await import('./store');
  const { store: store3 } = await import('./store');

  // Assertions
  expect(createStore).toHaveBeenCalledTimes(1);
  expect(store1).toBe(store2);
  expect(store2).toBe(store3);
  expect(store1).toBe(store3);

  // Done
  done();
});
it('should use __INITIAL_REDUX_STATE__ for initial state when creating store', async done => {
  expect.assertions(2);

  // Mock initial state
  const windowSpy = jest.spyOn(global as typeof global & { window: any }, 'window', 'get');
  windowSpy.mockImplementation(() => ({
    __INITIAL_REDUX_STATE__: { application: { dummy: true } },
  }));

  // Imports
  const { createStore } = await import('./createStore');
  await import('./store');

  // Assertions
  expect(createStore).toHaveBeenCalledTimes(1);
  expect(createStore).toHaveBeenCalledWith({ application: { dummy: true } });

  // Done
  done();
});
