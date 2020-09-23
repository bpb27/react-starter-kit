const faker = require('faker');
const {
  ContactsDB,
  ERROR_NOT_FOUND,
  ERROR_VALIDATION,
} = require('../contacts-db');

const createMockContact = () => ({
  name: faker.name.findName(),
  email: faker.internet.exampleEmail(),
  phone: faker.phone.phoneNumberFormat(),
  id: faker.random.uuid(),
});

describe('contactsDB', () => {
  const fakeId = 'not_a_real_id';
  let contacts;
  let contactsDB;

  beforeEach(() => {
    contacts = [createMockContact()];
    contactsDB = new ContactsDB(contacts);
  });

  describe('get all contacts', () => {
    it('returns all contacts', () => {
      const result = contactsDB.all();
      expect(result.data).toEqual(contacts);
    });
  });

  describe('get one contact by id', () => {
    it('returns a contact', () => {
      const [contact] = contacts;
      const result = contactsDB.read(contact.id);
      expect(result.data).toEqual(contact);
    });

    it('returns an error if not found', () => {
      const result = contactsDB.read(fakeId);
      expect(result).toEqual(ERROR_NOT_FOUND);
    });
  });

  describe('creates a new contact', () => {
    it('creates a contact', () => {
      const contact = createMockContact();
      const result = contactsDB.create(contact);
      expect(result.data.email).toEqual(contact.email);
      expect(result.data.name).toEqual(contact.name);
      expect(result.data.phone).toEqual(contact.phone);
      expect(result.data.id).toBeDefined();
    });

    it('returns an error if missing fields', () => {
      const contact = { ...createMockContact(), name: undefined };
      const result = contactsDB.create(contact);
      expect(result).toEqual(ERROR_VALIDATION);
    });
  });

  describe('updates an existing contact', () => {
    it('updates a contact', () => {
      const contact = { ...contacts[0], name: faker.name.findName() };
      const result = contactsDB.update(contact);
      expect(result.data).toEqual(contact);
    });

    it('returns an error if not found', () => {
      const result = contactsDB.update({ id: fakeId });
      expect(result).toEqual(ERROR_NOT_FOUND);
    });
  });

  describe('deletes an existing contact', () => {
    it('deletes a contact', () => {
      const [contact] = contacts;
      const result = contactsDB.delete(contact.id);
      expect(result.data).toEqual(contact.id);
    });

    it('returns an error if not found', () => {
      const result = contactsDB.delete(fakeId);
      expect(result).toEqual(ERROR_NOT_FOUND);
    });
  });
});
