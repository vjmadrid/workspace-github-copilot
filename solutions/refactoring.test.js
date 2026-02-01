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
});
