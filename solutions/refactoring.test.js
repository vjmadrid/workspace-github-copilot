
const { isAdult, isValidEmail, getSubscriptionMessage, processUsers } = require('./refactoring');

describe('isAdult', () => {
  it('debería retornar true para edad 18 (límite)', () => {
    expect(isAdult({ age: 18 })).toBe(true);
  });

  const { isAdult, isValidEmail, getSubscriptionMessage, processUsers } = require('./refactoring');

  describe('isAdult', () => {
    test('should return true for age >= 18', () => {
      expect(isAdult({ age: 18 })).toBe(true);
      expect(isAdult({ age: 25 })).toBe(true);
      expect(isAdult({ age: 100 })).toBe(true);
    });
    test('should return false for age < 18', () => {
      expect(isAdult({ age: 17 })).toBe(false);
      expect(isAdult({ age: 0 })).toBe(false);
      expect(isAdult({ age: -5 })).toBe(false);
    });
    test('should handle missing age property', () => {
      expect(isAdult({})).toBe(false);
    });
    test('should handle age as string number', () => {
      expect(isAdult({ age: "18" })).toBe(true);
    });
    test('should handle age as string non-numeric', () => {
      expect(isAdult({ age: "no-num" })).toBe(false);
    });
    test('should handle age as null, undefined or NaN', () => {
      expect(isAdult({ age: null })).toBe(false);
      expect(isAdult({ age: undefined })).toBe(false);
      expect(isAdult({ age: NaN })).toBe(false);
    });
    test('should handle user as null, undefined, string, array or empty object', () => {
      expect(isAdult(null)).toBe(false);
      expect(isAdult(undefined)).toBe(false);
      expect(isAdult("string")).toBe(false);
      expect(isAdult([])).toBe(false);
      expect(isAdult({})).toBe(false);
    });
    test('should return false for age just below limit', () => {
      expect(isAdult({ age: 17.99 })).toBe(false);
      expect(isAdult({ age: 17.5 })).toBe(false);
    });
    test('should return true for age just above limit', () => {
      expect(isAdult({ age: 18.01 })).toBe(true);
      expect(isAdult({ age: 18.5 })).toBe(true);
    });
  });

  describe('isValidEmail', () => {
    test('should return true for valid email', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('@example.com')).toBe(true);
      expect(isValidEmail('test@')).toBe(true);
      expect(isValidEmail('a@')).toBe(true);
      expect(isValidEmail('@a')).toBe(true);
      expect(isValidEmail('a@a')).toBe(true);
      expect(isValidEmail('a@a.')).toBe(true);
      expect(isValidEmail('a@.a')).toBe(true);
      expect(isValidEmail('a@a')).toBe(true);
    });
    test('should return false for missing @', () => {
      expect(isValidEmail('testexample.com')).toBe(false);
    });
    test('should return false for empty string', () => {
      expect(isValidEmail('')).toBe(false);
    });
    test('should handle email as null', () => {
      expect(isValidEmail(null)).toBe(false);
    });
    test('should handle email as undefined', () => {
      expect(isValidEmail(undefined)).toBe(false);
    });
    test('should handle email as number', () => {
      expect(isValidEmail(12345)).toBe(false);
    });
    test('should handle email as object', () => {
      expect(isValidEmail({})).toBe(false);
    });
    test('should handle email as array', () => {
      expect(isValidEmail(["@"])).toBe(false);
    });
  });

  describe('getSubscriptionMessage', () => {
    test('should return premium message', () => {
      expect(getSubscriptionMessage({ name: 'A', subscription: 'premium' })).toBe('A has access to all features.');
      expect(getSubscriptionMessage({ name: 'Alice', subscription: 'premium' })).toBe('Alice has access to all features.');
    });
    test('should return basic message', () => {
      expect(getSubscriptionMessage({ name: 'B', subscription: 'basic' })).toBe('B has limited access.');
      expect(getSubscriptionMessage({ name: 'Bob', subscription: 'basic' })).toBe('Bob has limited access.');
    });
    test('should return default message for unknown subscription', () => {
      expect(getSubscriptionMessage({ name: 'C', subscription: 'unknown' })).toBe('C has no access.');
      expect(getSubscriptionMessage({ name: 'Charlie', subscription: 'none' })).toBe('Charlie has no access.');
    });
    test('should return default message for missing subscription', () => {
      expect(getSubscriptionMessage({ name: 'D' })).toBe('D has no access.');
      expect(getSubscriptionMessage({ name: 'Dana' })).toBe('Dana has no access.');
    });
    test('should handle missing name', () => {
      expect(getSubscriptionMessage({ subscription: 'premium' })).toBe('undefined has access to all features.');
    });
    test('should throw for null user', () => {
      expect(() => getSubscriptionMessage(null)).toThrow();
    });
    test('should throw for user as string', () => {
      expect(() => getSubscriptionMessage("not an object")).toThrow();
    });
    test('should throw for user as array', () => {
      expect(() => getSubscriptionMessage([])).toThrow();
    });
    test('should handle subscription as array', () => {
      expect(getSubscriptionMessage({ name: 'X', subscription: ["premium"] })).toBe('X has no access.');
    });
    test('should handle name as object', () => {
      expect(getSubscriptionMessage({ name: {}, subscription: 'premium' })).toBe('[object Object] has access to all features.');
    });
    test('should handle empty string as subscription', () => {
      expect(getSubscriptionMessage({ name: 'Empty', subscription: '' })).toBe('Empty has no access.');
    });
    test('should handle whitespace as subscription', () => {
      expect(getSubscriptionMessage({ name: 'Space', subscription: ' ' })).toBe('Space has no access.');
    });
    test('should handle null and undefined as subscription', () => {
      expect(getSubscriptionMessage({ name: 'Null', subscription: null })).toBe('Null has no access.');
      expect(getSubscriptionMessage({ name: 'Undefined', subscription: undefined })).toBe('Undefined has no access.');
    });
  });

  describe('processUsers', () => {
    test('should process empty array without error', () => {
      expect(() => processUsers([])).not.toThrow();
    });
    test('should process user with missing fields', () => {
      expect(() => processUsers([{ }])).not.toThrow();
    });
    test('should process user with negative age and invalid email', () => {
      expect(() => processUsers([{ name: 'E', age: -5, email: 'noatsign', subscription: 'none' }])).not.toThrow();
    });
    test('should throw if users is null', () => {
      expect(() => processUsers(null)).toThrow();
    });
    test('should throw if users is not array', () => {
      expect(() => processUsers("not an array")).toThrow();
    });
    test('should process array of nulls', () => {
      expect(() => processUsers([null, null])).not.toThrow();
    });
    test('should process array of strings', () => {
      expect(() => processUsers(["a", "b"])).not.toThrow();
    });
    test('should process array with undefined', () => {
      expect(() => processUsers([undefined])).not.toThrow();
    });
  });

