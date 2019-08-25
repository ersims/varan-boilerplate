import * as React from 'react';
import { shallow } from 'enzyme';
import { Feature } from '../../../../src/client/components/Feature/Feature';

// Mock icon
const svgIcon = ({ className }: { className?: string }) => <svg className={className} />;

// Tests
test('should render correctly', () => {
  const component = shallow(
    <Feature Icon={svgIcon} title="My Feature">
      <p id="my-body">My feature body</p>
    </Feature>,
  );
  expect(component.hasClass('feature')).toBe(true);
  expect(component.find('.feature__icon')).toHaveLength(1);
  expect(component.find('h2.feature__title')).toHaveLength(1);
  expect(component.find('small.feature__subtitle')).toHaveLength(0);
  expect(component.find('p#my-body')).toHaveLength(1);
});
test('should support subtitle', () => {
  const component = shallow(
    <Feature Icon={svgIcon} subtitle="My Subtitle" title="My Feature">
      <p id="my-body">My feature body</p>
    </Feature>,
  );
  expect(component.find('small.feature__subtitle')).toHaveLength(1);
});
