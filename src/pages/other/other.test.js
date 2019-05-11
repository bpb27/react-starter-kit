import React from 'react';
import { shallow } from 'enzyme';
import Other from './other.component';

const createProps = () => ({});

describe('Other', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<Other {...props} />);
    const element = wrapper.find('.other');
    expect(element.exists()).toEqual(true);
  });
});
