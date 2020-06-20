// Mocks
jest.mock('history', () => ({
  createBrowserHistory: jest.fn(() => 'browserHistory'),
  createMemoryHistory: jest.fn(() => 'memoryHistory'),
}));

// Tests
beforeEach(() => {
  jest.restoreAllMocks();
  jest.resetModules();
});
it('should use memory history if window is not available', async (done) => {
  expect.assertions(2);

  // Set window to undefined - simulate usage from Node
  const windowSpy = jest.spyOn(
    global as typeof global & { window: Window | undefined },
    'window',
    'get',
  );
  windowSpy.mockImplementation(() => undefined);

  const { createMemoryHistory } = await import('history');
  const { routerHistory } = await import('./routerHistory');

  // Assertions
  expect(routerHistory).toBe('memoryHistory');
  expect(createMemoryHistory).toHaveBeenCalled();

  // Done
  done();
});
it('should use browser history if window is available', async (done) => {
  expect.assertions(2);

  const { createBrowserHistory } = await import('history');
  const { routerHistory } = await import('./routerHistory');

  // Assertions
  expect(routerHistory).toBe('browserHistory');
  expect(createBrowserHistory).toHaveBeenCalled();

  // Done
  done();
});
