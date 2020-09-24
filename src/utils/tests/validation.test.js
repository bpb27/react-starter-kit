import { formatPhone, validEmail, validName, validPhone } from '../validation';

describe('validation utils', () => {
  describe('formatPhone', () => {
    it('formats a number', () => {
      expect(formatPhone('1234567890')).toEqual('123-456-7890');
    });
  });

  describe('validEmail', () => {
    test('a valid email', () => {
      expect(validEmail('burt@example.com')).toEqual(true);
    });
    test('an invalid email', () => {
      expect(validEmail('burt@example')).toEqual(false);
    });
  });

  describe('validName', () => {
    test('a valid name', () => {
      expect(validName('Burt Burtson')).toEqual(true);
    });
    test('an invalid name', () => {
      expect(validName('BB')).toEqual(false);
    });
  });

  describe('validPhone', () => {
    test('a valid phone', () => {
      expect(validPhone('1234567890')).toEqual(true);
    });
    test('an invalid phone', () => {
      expect(validPhone('1234')).toEqual(false);
    });
  });
});
