import React from 'react';
import { func, shape, string } from 'prop-types';
import './contact-form.style.scss';

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

  save = () => {
    this.props.save({ ...this.state, id: this.props.data?.id });
    this.props.cancel();
  }

  update = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render () {
    const { email, name, phone } = this.state;
    return (
      <div className="contactForm">
        <h2>{ this.props.headerText }</h2>
        <input name="name" onChange={this.update} type="text" value={name}/>
        <input name="email" onChange={this.update} type="text" value={email}/>
        <input name="phone" onChange={this.update} type="text" value={phone}/>
        <button onClick={this.save}>Save</button>
        <button onClick={this.props.cancel}>Cancel</button>
      </div>
    );
  }
}
