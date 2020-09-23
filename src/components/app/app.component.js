import React from 'react';
import './app.style.scss';
import ContactsAPI from 'api/contacts';

export default class App extends React.Component {
  state = {
    contacts: [],
    contactsAPI: new ContactsAPI(),
    error: null,
  };

  async componentDidMount () {
    const { data, error } = await this.state.contactsAPI.findAll();
    if (data) this.setState({ contacts: data });
    if (error) this.setState({ error });
  }

  render () {
    const { contacts, error } = this.state;
    return (
      <div className="app">
        {
          error && <p>Failed to load contacts</p>
        }
        {
          contacts.map(contact => (
            <div key={contact.id}>
              <h3>{ contact.name }</h3>
              <p>{ contact.email }</p>
              <p>{ contact.phone }</p>
            </div>
          ))
        }
      </div>
    );
  }
}
