import { isUrlExternal } from './isUrlExternal';

// Tests
it('should positively identify http:// urls as external', () => {
  expect(isUrlExternal('http://github.com')).toBe(true);
});
it('should positively identify https:// urls as external', () => {
  expect(isUrlExternal('https://github.com')).toBe(true);
});
it('should positively identify // urls as external', () => {
  expect(isUrlExternal('//github.com')).toBe(true);
});
it('should positively identify myapp:// urls as external', () => {
  expect(isUrlExternal('myapp://some-id')).toBe(true);
});
it('should identify relative paths as internal', () => {
  expect(isUrlExternal('some-page/some-sub-page')).toBe(false);
});
it('should identify absolute paths as internal', () => {
  expect(isUrlExternal('/some-page/some-sub-page')).toBe(false);
});
