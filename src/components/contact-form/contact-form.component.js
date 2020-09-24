import React from 'react';
import { func, shape, string } from 'prop-types';
import { Modal, ModalBackground } from 'components/styled/modal';
import { ButtonGroup, InputGroup } from 'components/styled/forms';

export default class ContactForm extends React.Component {
  static propTypes = {
    cancel: func.isRequired,
    data: shape({
      email: string,
      id: string,
      name: string,
      phone: string,
    }),
    headerText: string.isRequired,
    save: func.isRequired,
  }

  state = {
    email: this.props.data?.email,
    name: this.props.data?.name,
    phone: this.props.data?.phone,
  }

  save = event => {
    event.preventDefault();
    this.props.save({ ...this.state, id: this.props.data?.id });
  }

  update = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render () {
    const { email, name, phone } = this.state;
    return (
      <ModalBackground>
        <Modal>
          <h2>{ this.props.headerText }</h2>
          <form onSubmit={this.save}>
            <InputGroup>
              <label htmlFor="name">Name</label>
              <input name="name" onChange={this.update} type="text" value={name}/>
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <input name="email" onChange={this.update} type="text" value={email}/>
            </InputGroup>
            <InputGroup>
              <label htmlFor="phone">Phone</label>
              <input name="phone" onChange={this.update} type="text" value={phone}/>
            </InputGroup>
            <ButtonGroup>
              <button type="submit">Save</button>
              <button onClick={this.props.cancel}>Cancel</button>
            </ButtonGroup>
          </form>
        </Modal>
      </ModalBackground>
    );
  }
}
