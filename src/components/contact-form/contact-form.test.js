import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from './contact-form.component';

const createProps = () => ({
  name: 'Warren Gangrenous Harding',
});

describe('ContactForm', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<ContactForm {...props} />);
    const element = wrapper.find('.contactForm');
    expect(element.exists()).toEqual(true);
  });
});
