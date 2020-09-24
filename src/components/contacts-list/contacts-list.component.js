import React from 'react';
import { ContactsContext } from 'api/contacts';
import ContactDisplay from 'components/contact-display';
import ContactForm from 'components/contact-form';
import './contacts-list.style.scss';

export default class ContactsList extends React.Component {
  static contextType = ContactsContext;

  render () {
    const {
      closeCreator,
      closeEditor,
      contacts,
      creating,
      editing,
      openCreator,
      openEditor,
      remove,
      saveCreate,
      saveEdit,
    } = this.context;

    return (
      <div className="contactsList">
        {
          editing && (
            <ContactForm
              data={editing}
              headerText="Edit contact"
              save={saveEdit}
              cancel={closeEditor}
            />
          )
        }
        {
          creating ? (
            <ContactForm
              headerText="Create contact"
              save={saveCreate}
              cancel={closeCreator}
            />
          ) : (
            <button onClick={openCreator}>Add new contact</button>
          )
        }
        {
          contacts.map(contact => (
            <ContactDisplay
              data={contact}
              edit={openEditor}
              key={contact.id}
              remove={remove}
            />
          ))
        }
      </div>
    );
  }
}
