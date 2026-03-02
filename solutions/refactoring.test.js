
const { isAdult, isValidEmail, getSubscriptionMessage, processUsers } = require('./refactoring');

const { isAdult } = require('./refactoring');

describe('isAdult', () => {
  it('debería retornar true para edad 18 (límite)', () => {
    expect(isAdult({ age: 18 })).toBe(true);
  });
  it('debería retornar false para edad menor a 18', () => {
    expect(isAdult({ age: 17 })).toBe(false);
    expect(isAdult({ age: 0 })).toBe(false);
    expect(isAdult({ age: -5 })).toBe(false);
  });
  it('debería retornar true para edad mayor a 18', () => {
    expect(isAdult({ age: 25 })).toBe(true);
    expect(isAdult({ age: 100 })).toBe(true);
  });
  it('debería retornar false si falta age', () => {
    expect(isAdult({})).toBe(false);
  });
  it('debería retornar false si age es string no numérico', () => {
    expect(isAdult({ age: "no-num" })).toBe(false);
  });
  it('debería retornar true si age es string numérico "18"', () => {
    expect(isAdult({ age: "18" })).toBe(true);
  });
  it('debería retornar false si age es null, undefined o NaN', () => {
    expect(isAdult({ age: null })).toBe(false);
    expect(isAdult({ age: undefined })).toBe(false);
    expect(isAdult({ age: NaN })).toBe(false);
  });
  it('debería retornar false si user es null, undefined, string, array u objeto vacío', () => {
    expect(isAdult(null)).toBe(false);
    expect(isAdult(undefined)).toBe(false);
    expect(isAdult("string")).toBe(false);
    expect(isAdult([])).toBe(false);
    expect(isAdult({})).toBe(false);
  });
});
  test('should return true for age 18', () => {
    expect(isAdult({ age: 18 })).toBe(true);
  });
  test('should return false for age 17', () => {
    expect(isAdult({ age: 17 })).toBe(false);
  });
  test('should return true for age 100', () => {
    expect(isAdult({ age: 100 })).toBe(true);
  });
  test('should handle missing age property', () => {
    expect(isAdult({})).toBe(false);
  });
  test('should handle negative age', () => {
    expect(isAdult({ age: -1 })).toBe(false);
  });
  test('should handle age as string number', () => {
    expect(isAdult({ age: "18" })).toBe(true);
  });
  test('should handle age as NaN', () => {
    expect(isAdult({ age: NaN })).toBe(false);
  });
  test('should handle age as null', () => {
    expect(isAdult({ age: null })).toBe(false);
  });
  test('should handle age as undefined', () => {
    expect(isAdult({ age: undefined })).toBe(false);
  });
  test('should handle user as null', () => {
    expect(isAdult(null)).toBe(false);
  });
  test('should handle user as a string', () => {
    expect(isAdult("not an object")).toBe(false);
  });
  test('should handle user as array', () => {
    expect(isAdult([])).toBe(false);
  });
});

describe('isValidEmail', () => {
  test('should return true for valid email', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });
  test('should return false for missing @', () => {
    expect(isValidEmail('testexample.com')).toBe(false);
  });
  test('should return true for @ at start', () => {
    expect(isValidEmail('@example.com')).toBe(true);
  });
  test('should return true for @ at end', () => {
    expect(isValidEmail('test@')).toBe(true);
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
  });
  test('should return basic message', () => {
    expect(getSubscriptionMessage({ name: 'B', subscription: 'basic' })).toBe('B has limited access.');
  });
  test('should return default message for unknown subscription', () => {
    expect(getSubscriptionMessage({ name: 'C', subscription: 'unknown' })).toBe('C has no access.');
  });
  test('should return default message for missing subscription', () => {
    expect(getSubscriptionMessage({ name: 'D' })).toBe('D has no access.');
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
const { isAdult, isValidEmail, getSubscriptionMessage } = require('./refactoring');

describe('isAdult', () => {
  test('should return true for age >= 18', () => {
    expect(isAdult({ age: 18 })).toBe(true);
    expect(isAdult({ age: 25 })).toBe(true);
  });

  test('should return false for age < 18', () => {
    expect(isAdult({ age: 17 })).toBe(false);
    expect(isAdult({ age: 0 })).toBe(false);
  });

  test('should handle missing age property', () => {
    expect(isAdult({})).toBe(false);
  });

  test('should handle negative age', () => {
    expect(isAdult({ age: -1 })).toBe(false);
  });
});

describe('isValidEmail', () => {
  test('should return true for valid email', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  test('should return false for missing @', () => {
    expect(isValidEmail('userexample.com')).toBe(false);
  });

  test('should return false for empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });

  test('should handle null and undefined', () => {
    expect(isValidEmail(null)).toBe(false);
    expect(isValidEmail(undefined)).toBe(false);
  });
});

describe('getSubscriptionMessage', () => {
  test('should return premium message', () => {
    expect(getSubscriptionMessage({ name: 'Alice', subscription: 'premium' })).toBe('Alice has access to all features.');
  });

  test('should return basic message', () => {
    expect(getSubscriptionMessage({ name: 'Bob', subscription: 'basic' })).toBe('Bob has limited access.');
  });

  test('should return default message for unknown subscription', () => {
    expect(getSubscriptionMessage({ name: 'Charlie', subscription: 'none' })).toBe('Charlie has no access.');
  });

  test('should handle missing subscription', () => {
    expect(getSubscriptionMessage({ name: 'Dana' })).toBe('Dana has no access.');
  });

  test('should handle missing name', () => {
    expect(getSubscriptionMessage({ subscription: 'premium' })).toBe('undefined has access to all features.');
  });

  test('should handle user object as null', () => {
    expect(isAdult(null)).toBe(false);
  });

  test('should handle user object as undefined', () => {
    expect(isAdult(undefined)).toBe(false);
  });

  test('should handle user object as non-object', () => {
    expect(isAdult(42)).toBe(false);
    expect(isAdult('string')).toBe(false);
    expect(isAdult([])).toBe(false);
  });
});
