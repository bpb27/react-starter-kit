import React from 'react';
import { node } from 'prop-types';
import ContactsAPI from './api';
import { addItem, findItem, omit, removeItem, updateItem } from 'utils/data';

export const ContactsContext = React.createContext({});

export default class ContactsProvider extends React.Component {
  static propTypes = {
    children: node,
  };

  static contextType = ContactsContext;

  state = {
    creating: false,
    editing: null,
    contacts: [],
    contactsAPI: new ContactsAPI(),
    error: null,
  };

  componentDidMount () {
    this.fetchAll();
  }

  closeCreator = () => {
    this.setState({ creating: false });
  }

  closeEditor = () => {
    this.setState({ editing: null });
  }

  openEditor = id => {
    this.setState({ editing: findItem(this.state.contacts, id) });
  };

  openCreator = () => {
    this.setState({ creating: true });
  };

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

  saveCreate = async (params) => {
    const { contacts, contactsAPI } = this.state;
    const { data } = await contactsAPI.create(params);
    this.updateContacts(addItem(contacts, data));
  }

  saveEdit = async (params) => {
    const { contacts, contactsAPI } = this.state;
    await contactsAPI.update(params.id, omit(params, ['id']));
    this.updateContacts(updateItem(contacts, params));
  }

  updateContacts = contacts => {
    const updated = contacts.sort((a, b) => a.name > b.name ? 1 : -1);
    this.setState({ contacts: updated });
  }

  get value () {
    return {
      ...this.state,
      closeCreator: this.closeCreator,
      closeEditor: this.closeEditor,
      openCreator: this.openCreator,
      openEditor: this.openEditor,
      saveCreate: this.saveCreate,
      saveEdit: this.saveEdit,
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
