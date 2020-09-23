const faker = require('faker');

const ERROR_VALIDATION = { error: 'Please include email, name, and phone values.', code: 422 };
const ERROR_NOT_FOUND = { error: 'Not found', code: 401 };

class ContactsDB {
  constructor (contacts = []) {
    this.data = [...contacts];
  }

  all () {
    return { data: this.data };
  }

  create ({ email, name, phone }) {
    if (!email || !name || !phone) return ERROR_VALIDATION;
    const newContact = { email, id: faker.random.uuid(), name, phone };
    this.data.push(newContact);
    return { data: this.find(newContact.id) };
  }

  delete (id) {
    if (!this.find(id)) return ERROR_NOT_FOUND;
    this.data = this.data.filter(item => item.id !== id);
    return { data: id };
  }

  find (id) {
    return this.data.find(item => item.id === id);
  }

  read (id) {
    const contact = this.find(id);
    if (!contact) return ERROR_NOT_FOUND;
    return { data: contact };
  }

  update ({ email, id, name, phone }) {
    const currentContact = this.find(id);
    if (!currentContact) return ERROR_NOT_FOUND;
    const updatedContact = {
      email: email || currentContact.email,
      id: currentContact.id,
      name: name || currentContact.name,
      phone: phone || currentContact.phone,
    };
    this.data = this.data.map(item => item.id !== id ? item : updatedContact);
    return { data: this.find(id) };
  }
}

module.exports = {
  ContactsDB,
  ERROR_NOT_FOUND,
  ERROR_VALIDATION,
};
