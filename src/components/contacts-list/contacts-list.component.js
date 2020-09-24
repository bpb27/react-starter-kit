import React from 'react';
import styled from 'styled-components';
import { ContactsContext } from 'contexts/contacts';
import ContactDisplay from 'components/contact-display';
import ContactForm from 'components/contact-form';

const ControlsContainer = styled.div`
  display: flex;
  button {
    margin-right: 10px;
  }
`;

const ContactsContainer = styled.div`
  display: flex;
  flex-flow: wrap;
`;

export default class ContactsList extends React.Component {
  static contextType = ContactsContext;

  state = {
    search: '',
  }

  get contacts () {
    const search = this.state.search.toLowerCase();
    return this.context.contacts
      .filter(contact => contact.name.toLowerCase().includes(search));
  }

  render () {
    const {
      closeCreateForm,
      closeEditForm,
      create,
      editingContact,
      isCreating,
      isEditing,
      openCreateForm,
      openEditForm,
      remove,
      update,
    } = this.context;

    return (
      <div className="contactsList">
        {
          isEditing && (
            <ContactForm
              data={editingContact}
              headerText="Edit contact"
              save={update}
              cancel={closeEditForm}
            />
          )
        }
        {
          isCreating && (
            <ContactForm
              headerText="Create contact"
              save={create}
              cancel={closeCreateForm}
            />
          )
        }
        <ControlsContainer>
          <button onClick={openCreateForm}>
            Add new contact
          </button>
          <input
            onChange={event => this.setState({ search: event.target.value })}
            placeholder="Search by name..."
            type="text"
            value={this.state.search}
          />
        </ControlsContainer>
        <ContactsContainer>
          {
            this.contacts.map(contact => (
              <ContactDisplay
                data={contact}
                edit={openEditForm}
                key={contact.id}
                remove={remove}
              />
            ))
          }
        </ContactsContainer>
      </div>
    );
  }
}
