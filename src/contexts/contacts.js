import React from 'react';
import { node } from 'prop-types';
import { request } from 'utils/request';
import { addItem, findItem, omit, removeItem, updateItem } from 'utils/data';
import ContactForm from 'components/contact-form';
import { API_URL } from 'constants';

const ROUTE_BASE = `${API_URL}/contacts`;

export const ContactsContext = React.createContext({});

export default class ContactsProvider extends React.Component {
  static propTypes = {
    children: node,
  };

  static contextType = ContactsContext;

  state = {
    contacts: [],
    editingContact: null,
    isCreating: false,
    isEditing: false,
  };

  componentDidMount () {
    this.fetchAll();
  }

  closeCreateForm = () => {
    this.setState({ isCreating: false });
  }

  closeEditForm = () => {
    this.setState({ editingContact: null, isEditing: false });
  }

  openEditForm = id => {
    const editingContact = findItem(this.state.contacts, id);
    this.setState({ editingContact, isEditing: true });
  };

  openCreateForm = () => {
    this.setState({ isCreating: true });
  };

  updateContacts = contacts => {
    const updated = contacts.sort((a, b) => a.name > b.name ? 1 : -1);
    this.setState({ contacts: updated });
  }

  create = async (params) => {
    const { data } = await request({
      method: 'POST',
      params,
      route: ROUTE_BASE,
    });
    const updatedContacts = addItem(this.state.contacts, data);
    this.updateContacts(updatedContacts);
    this.closeCreateForm();
  }

  fetchAll = async () => {
    const { data } = await request({
      method: 'GET',
      route: ROUTE_BASE,
    });
    this.updateContacts(data);
  }

  remove = async (id) => {
    await request({
      method: 'DELETE',
      route: `${ROUTE_BASE}/${id}`,
    });
    const updatedContacts = removeItem(this.state.contacts, id);
    this.updateContacts(updatedContacts);
  }

  update = async (params) => {
    const { data } = await request({
      method: 'PUT',
      params: omit(params, ['id']),
      route: `${ROUTE_BASE}/${params.id}`,
    });
    const updatedContacts = updateItem(this.state.contacts, data);
    this.updateContacts(updatedContacts);
    this.closeEditForm();
  }

  get value () {
    return {
      ...this.state,
      closeCreateForm: this.closeCreateForm,
      closeEditForm: this.closeEditForm,
      create: this.create,
      openCreateForm: this.openCreateForm,
      openEditForm: this.openEditForm,
      remove: this.remove,
      update: this.update,
    };
  }

  get modal () {
    const { editingContact, isCreating, isEditing } = this.state;
    if (isEditing) {
      return (
        <ContactForm
          data={editingContact}
          headerText="Edit contact"
          save={this.update}
          cancel={this.closeEditForm}
        />
      );
    } else if (isCreating) {
      return (
        <ContactForm
          headerText="Create contact"
          save={this.create}
          cancel={this.closeCreateForm}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <ContactsContext.Provider value={this.value}>
        { this.modal }
        { this.props.children }
      </ContactsContext.Provider>
    );
  }
}
