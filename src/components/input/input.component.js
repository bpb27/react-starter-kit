import React from 'react';
import { func, number, oneOfType, string } from 'prop-types';
import { InputGroup } from 'components/styled/forms';

const Input = ({ label, name, onChange, placeholder, type, value }) => (
  <InputGroup>
    { label && <label htmlFor={name}>{ label }</label> }
    <input
      name={name}
      onChange={event => onChange(event.target.value)}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  </InputGroup>
);

Input.propTypes = {
  label: string,
  name: string.isRequired,
  value: oneOfType([number, string]),
  onChange: func.isRequired,
  placeholder: string,
  type: string,
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
};

export default Input;
