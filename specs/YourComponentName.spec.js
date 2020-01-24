import React from 'react';
import { shallow } from 'enzyme';
import YourComponentName from '../src/components/YourComponentName';

describe('YourComponentName', () => {
  it('should render correctly', () => {
    const component = shallow(<YourComponentName />);
    expect(component).toMatchSnapshot();
  });
});
