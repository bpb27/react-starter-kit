import React from 'react';
import { shallow } from 'enzyme';
import ContactsList from './contacts-list.component';

const createProps = () => ({
  name: 'Warren Gangrenous Harding',
});

describe('ContactsList', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<ContactsList {...props} />);
    const element = wrapper.find('.contactsList');
    expect(element.exists()).toEqual(true);
  });
});
