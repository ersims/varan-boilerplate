import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from '../../../../src/client/App';

// Tests
test('should render correctly', () => {
  const component = shallow(<App />);
  expect(component.hasClass('App')).toBe(true);
  expect(component.find('div.AppContainer')).toHaveLength(1);
});
