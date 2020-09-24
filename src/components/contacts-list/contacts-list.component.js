import React from 'react';
import { ContactsContext } from 'contexts/contacts';
import ContactDisplay from 'components/contact-display';
import ContactForm from 'components/contact-form';
import './contacts-list.style.scss';

export default class ContactsList extends React.Component {
  static contextType = ContactsContext;

  render () {
    const {
      closeCreateForm,
      closeEditForm,
      contacts,
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
          isCreating ? (
            <ContactForm
              headerText="Create contact"
              save={create}
              cancel={closeCreateForm}
            />
          ) : (
            <button onClick={openCreateForm}>Add new contact</button>
          )
        }
        {
          contacts.map(contact => (
            <ContactDisplay
              data={contact}
              edit={openEditForm}
              key={contact.id}
              remove={remove}
            />
          ))
        }
      </div>
    );
  }
}
