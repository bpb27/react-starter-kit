import React from 'react';
import './app.style.scss';
import ContactsProvider from 'api/contacts';
import ContactsList from 'components/contacts-list';

export default class App extends React.Component {
  render () {
    return (
      <div className="app">
        <h1>Contacts Manager</h1>
        <ContactsProvider>
          <ContactsList/>
        </ContactsProvider>
      </div>
    );
  }
}
