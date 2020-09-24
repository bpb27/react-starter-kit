import React, { useContext } from 'react';
import { string } from 'prop-types';
import { ContactsContext } from 'contexts/contacts';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
`;

const ContactCard = ({ email, id, name, phone }) => {
  const { openEditForm, remove } = useContext(ContactsContext);
  return (
    <Container>
      <h4>{ name }</h4>
      <p>{ email }</p>
      <p>{ phone }</p>
      <div>
        <button onClick={() => openEditForm(id)}>Edit</button>
        <button onClick={() => remove(id)}>Delete</button>
      </div>
    </Container>
  );
};

ContactCard.propTypes = {
  email: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  phone: string.isRequired,
};

export default ContactCard;
