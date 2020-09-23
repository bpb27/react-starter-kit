import React from 'react';
import { node } from 'prop-types';
import ContactsAPI from './api';

export const ContactsContext = React.createContext({});

export default class ContactsProvider extends React.Component {
  static propTypes = {
    children: node,
  };

  static contextType = ContactsContext;

  state = {
    contact: null,
    contacts: [],
    contactsAPI: new ContactsAPI(),
    error: null,
  };

  componentDidMount () {
    this.fetchAll();
  }

  async fetchAll () {
    const { data, error } = await this.state.contactsAPI.findAll();
    if (data) this.setState({ contacts: data });
    if (error) this.setState({ error });
  }

  render() {
    return (
      <ContactsContext.Provider value={{...this.state}}>
        {this.props.children}
      </ContactsContext.Provider>
    );
  }
}
