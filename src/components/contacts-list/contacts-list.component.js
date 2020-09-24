import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ContactsContext } from 'contexts/contacts';
import ContactDisplay from 'components/contact-display';
import ContactForm from 'components/contact-form';
import Input from 'components/input';

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

const ContactsList = () => {
  const [search, updateSearch] = useState('');
  const context = useContext(ContactsContext);

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
  } = context;

  return (
    <div>
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
        <Input
          name="search"
          placeholder="Search by name..."
          onChange={updateSearch}
          value={search}
        />
      </ControlsContainer>
      <ContactsContainer>
        {
          contacts
            .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
            .map(contact => (
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
};

export default ContactsList;
