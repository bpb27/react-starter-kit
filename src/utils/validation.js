/* eslint-disable no-useless-escape */
const phoneRegEx = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
const digitsRegEx = new RegExp(/^\D+/g);
const emailRegEx =  new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
/* eslint-disable no-useless-escape */

export const validEmail = value => emailRegEx.test(value);
export const validName = value => value.includes(' ') && value.length > 3;
export const validPhone = value => phoneRegEx.test(value);
export const formatPhone = value => {
  const digits = value.replace(digitsRegEx, '');
  return [digits.substring(0, 3), digits.substring(3, 6), digits.substring(6, 10)].join('-');
};
