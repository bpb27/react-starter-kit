import React from 'react';
import { ContactsContext } from 'api/contacts';
import ContactDisplay from 'components/contact-display';
import './contacts-list.style.scss';

export default class ContactsList extends React.Component {
  static contextType = ContactsContext;

  render () {
    return (
      <div className="contactsList">
        {
          this.context.contacts.map(contact => (
            <ContactDisplay data={contact} key={contact.id}/>
          ))
        }
      </div>
    );
  }
}
