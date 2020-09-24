import React from 'react';
import styled from 'styled-components';
import ContactsProvider from 'contexts/contacts';
import ContactsList from 'components/contacts-list';

const AppContainer = styled.div`
  font-family: monospace;
`;

const App = () => (
  <AppContainer>
    <h1>Contacts Manager</h1>
    <ContactsProvider>
      <ContactsList/>
    </ContactsProvider>
  </AppContainer>
);

export default App;
