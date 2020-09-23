import React from 'react';
import { shallow } from 'enzyme';
import ContactDisplay from './contact-display.component';

const createProps = () => ({
  name: 'Warren Gangrenous Harding',
});

describe('ContactDisplay', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<ContactDisplay {...props} />);
    const element = wrapper.find('.contactDisplay');
    expect(element.exists()).toEqual(true);
  });
});
