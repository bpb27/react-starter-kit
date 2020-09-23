import React from 'react';
import { node } from 'prop-types';
import ContactsAPI from './api';
import { addItem, removeItem, updateItem } from 'utils/data';

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

  fetchAll = async () => {
    const { data, error } = await this.state.contactsAPI.findAll();
    if (data) this.updateContacts(data);
    if (error) this.setState({ error });
  }

  remove = async (id) => {
    const { contacts, contactsAPI } = this.state;
    await contactsAPI.delete(id);
    this.updateContacts(removeItem(contacts, id));
  }

  updateContacts = contacts => {
    this.setState({ contacts });
  }

  get value () {
    return {
      ...this.state,
      remove: this.remove,
    };
  }

  render() {
    return (
      <ContactsContext.Provider value={this.value}>
        {this.props.children}
      </ContactsContext.Provider>
    );
  }
}
