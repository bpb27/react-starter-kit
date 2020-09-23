import React from 'react';
import { shape, string } from 'prop-types';
import './contact-display.style.scss';

export default class ContactDisplay extends React.Component {
  static propTypes = {
    data: shape({
      email: string,
      id: string,
      name: string,
      phone: string,
    }).isRequired,
  }

  render () {
    const { email, name, phone } = this.props.data;
    return (
      <div className="contactDisplay">
        <h4>{ name }</h4>
        <p>{ email }</p>
        <p>{ phone }</p>
      </div>
    );
  }
}
