import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { textMatch } from 'utils/data';
import { ContactsContext } from 'contexts/contacts';
import ContactCard from 'components/contact-card';
import Input from 'components/input';

const Controls = styled.div`
  display: flex;
  button {
    margin-right: 10px;
  }
`;

const List = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const ContactsList = () => {
  const [search, updateSearch] = useState('');
  const { contacts, openCreateForm } = useContext(ContactsContext);

  const list = contacts
    .filter(contact => textMatch(search, contact, ['email', 'name', 'phone']));

  return (
    <div>
      <Controls>
        <button onClick={openCreateForm}>Add new contact</button>
        <Input
          name="search"
          placeholder="Search by name..."
          onChange={updateSearch}
          value={search}
        />
      </Controls>
      <List>
        {
          list.map(contact => <ContactCard key={contact.id} {...contact}/>)
        }
      </List>
    </div>
  );
};

export default ContactsList;
