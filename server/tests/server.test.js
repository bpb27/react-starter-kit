const fetch = require('node-fetch');
const faker = require('faker');

const baseRoute = 'http://localhost:3001/contacts';
const headers = { 'Content-Type': 'application/json' };

/*
  NB:
  This would be a better test in a real application.
  This test expects the server to be running, and running on 3001.
*/

describe('acceptance test', () => {
  let contacts;

  beforeEach(async () => {
    const result = await fetch(baseRoute);
    const data = await result.json();
    contacts = data;
  });

  describe('GET /contacts', () => {
    test('returns all', async () => {
      const result = await fetch(baseRoute);
      const data = await result.json();
      expect(data.length).toBeGreaterThan(0);
      expect(data[0].id).toBeDefined();
    });
  });

  describe('GET /contacts/:id', () => {
    test('returns one', async () => {
      const [contact] = contacts;
      const result = await fetch(`${baseRoute}/${contact.id}`);
      const data = await result.json();
      expect(data).toEqual(contact);
    });
  });

  describe('POST /contacts', () => {
    test('creates', async () => {
      const contact = {
        name: faker.name.findName(),
        email: faker.internet.exampleEmail(),
        phone: faker.phone.phoneNumberFormat(),
      };
      const result = await fetch(baseRoute, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers,
      });
      const data = await result.json();
      expect(data.name).toEqual(contact.name);
      expect(data.email).toEqual(contact.email);
      expect(data.phone).toEqual(contact.phone);
      expect(data.id).toBeDefined();
    });
  });

  describe('UPDATE /contacts/:id', () => {
    test('updates', async () => {
      const [contact] = contacts;
      const result = await fetch(`${baseRoute}/${contact.id}`, {
        method: 'PUT',
        body: JSON.stringify({ name: 'Petey Peppercorn' }),
        headers,
      });
      const data = await result.json();
      expect(data).toEqual({ ...contact, name: 'Petey Peppercorn' });
    });
  });

  describe('DELETE /contacts/:id', () => {
    test('deletes', async () => {
      const [contact] = contacts;
      const result = await fetch(`${baseRoute}/${contact.id}`, {
        method: 'DELETE',
      });
      expect(result.status).toEqual(200);
    });
  });
});
