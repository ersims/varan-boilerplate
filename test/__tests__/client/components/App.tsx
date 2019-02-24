import * as React from 'react';
import { App } from '../../../../src/client/components/App';
import { shallow } from 'enzyme';

// Tests
test('should render correctly', () => {
  const component = shallow(<App />);
  expect(component.hasClass('App')).toBe(true);
  expect(component.find('div.AppContainer')).toHaveLength(1);
});
