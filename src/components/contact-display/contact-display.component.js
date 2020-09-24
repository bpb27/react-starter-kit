import React from 'react';
import { func, shape, string } from 'prop-types';
import styled from 'styled-components';

const ContactContainer = styled.div`
  width: 300px;
`;

const ContactDisplay = ({ data, edit, remove }) => (
  <ContactContainer>
    <h4>{ data.name }</h4>
    <p>{ data.email }</p>
    <p>{ data.phone }</p>
    <div>
      <button onClick={() => edit(data.id)}>Edit</button>
      <button onClick={() => remove(data.id)}>Delete</button>
    </div>
  </ContactContainer>
);

ContactDisplay.propTypes = {
  data: shape({
    email: string,
    id: string,
    name: string,
    phone: string,
  }).isRequired,
  edit: func.isRequired,
  remove: func.isRequired,
};

export default ContactDisplay;
