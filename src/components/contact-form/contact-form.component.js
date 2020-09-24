import React, { useState } from 'react';
import { func, shape, string } from 'prop-types';
import Input from 'components/input';
import { Modal, ModalBackground } from 'components/styled/modal';
import { ButtonGroup } from 'components/styled/forms';

const ContactForm = ({ cancel, data, headerText, save }) => {
  const [email, setEmail] = useState(data?.email);
  const [name, setName] = useState(data?.name);
  const [phone, setPhone] = useState(data?.phone);

  const saveForm = event => {
    event.preventDefault();
    const id = data?.id;
    save({ email, id, name, phone });
  };

  return (
    <ModalBackground>
      <Modal>
        <h2>{ headerText }</h2>
        <form onSubmit={saveForm}>
          <Input
            name="name"
            label="Name"
            onChange={setName}
            value={name}
          />
          <Input
            name="email"
            label="Email"
            onChange={setEmail}
            value={email}
          />
          <Input
            name="phone"
            label="Phone"
            onChange={setPhone}
            value={phone}
          />
          <ButtonGroup>
            <button type="submit">Save</button>
            <button onClick={cancel}>Cancel</button>
          </ButtonGroup>
        </form>
      </Modal>
    </ModalBackground>
  );
};

ContactForm.propTypes = {
  cancel: func.isRequired,
  data: shape({
    email: string.isRequired,
    id: string.isRequired,
    name: string.isRequired,
    phone: string.isRequired,
  }),
  headerText: string.isRequired,
  save: func.isRequired,
};

export default ContactForm;
