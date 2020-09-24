import React from 'react';
import styled from 'styled-components';
import ContactsProvider from 'contexts/contacts';
import ContactList from 'components/contact-list';

const AppContainer = styled.div`
  font-family: monospace;
`;

const App = () => (
  <AppContainer>
    <h1>Contacts Manager</h1>
    <ContactsProvider>
      <ContactList/>
    </ContactsProvider>
  </AppContainer>
);

export default App;
