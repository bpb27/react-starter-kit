import React from 'react';
import './app.style.scss';
import ContactsAPI from 'api/contacts';

export default class App extends React.Component {
  state = {
    contacts: [],
    contactsAPI: new ContactsAPI(),
  };

  async componentDidMount () {
    const contacts = await this.state.contactsAPI.findAll();
    this.setState({ contacts });
  }

  render () {
    return (
      <div className="app">
        {
          this.state.contacts.map(contact => {
            <div>{contact.name}</div>;
          })
        }
      </div>
    );
  }
}
