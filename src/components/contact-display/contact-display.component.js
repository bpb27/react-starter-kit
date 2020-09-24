import React from 'react';
import { func, shape, string } from 'prop-types';
import './contact-display.style.scss';

export default class ContactDisplay extends React.Component {
  static propTypes = {
    data: shape({
      email: string,
      id: string,
      name: string,
      phone: string,
    }).isRequired,
    edit: func.isRequired,
    remove: func.isRequired,
  }

  render () {
    const { data, edit, remove } = this.props;
    const { email, id, name, phone } = data;
    return (
      <div className="contactDisplay">
        <h4>{ name }</h4>
        <p>{ email }</p>
        <p>{ phone }</p>
        <div>
          <button onClick={() => edit(id)}>Edit</button>
          <button onClick={() => remove(id)}>Delete</button>
        </div>
      </div>
    );
  }
}