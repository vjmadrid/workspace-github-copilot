// Tests - casos positivos, negativos, edge cases
describe('User Processing', () => {
  // Mock console for cleaner test output
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = {
      log: jest.fn(),
      warn: jest.fn(),
      error: jest.fn(),
    };
    global.console = consoleSpy;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('isAdult', () => {
    it('should return true for age >= 18', () => {
      expect(isAdult(18)).toBe(true);
      expect(isAdult(25)).toBe(true);
    });

    it('should return false for age < 18', () => {
      expect(isAdult(17)).toBe(false);
      expect(isAdult(0)).toBe(false);
    });

    it('should return false for negative age', () => {
      expect(isAdult(-1)).toBe(false);
    });

    it('should handle string numeric age', () => {
      expect(isAdult('18')).toBe(true);
      expect(isAdult('17')).toBe(false);
    });

    it('should handle null, undefined, NaN', () => {
      expect(isAdult(null)).toBe(false);
      expect(isAdult(undefined)).toBe(false);
      expect(isAdult(NaN)).toBe(false);
    });
  });

  describe('isValidEmail', () => {
    it('should return true for valid emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name+tag@example.co.uk')).toBe(true);
    });

    it('should return false for invalid emails', () => {
      expect(isValidEmail('notanemail')).toBe(false);
      expect(isValidEmail('missing@domain')).toBe(false);
      expect(isValidEmail('space in@email.com')).toBe(false);
    });

    it('should return false for empty string', () => {
      expect(isValidEmail('')).toBe(false);
    });

    it('should return false for email with double @', () => {
      expect(isValidEmail('user@@domain.com')).toBe(false);
    });

    it('should return false for email with domain missing', () => {
      expect(isValidEmail('user@')).toBe(false);
    });

    it('should return false for email with dot at start/end', () => {
      expect(isValidEmail('.user@domain.com')).toBe(false);
      expect(isValidEmail('user@domain.com.')).toBe(false);
    });

    it('should handle unicode/accents in email', () => {
      expect(isValidEmail('usér@dominio.com')).toBe(false);
    });
  });

  describe('getAccessLevel', () => {
    it('should return correct access for premium subscription', () => {
      expect(getAccessLevel('premium')).toBe('has access to all features');
    });

    it('should return correct access for basic subscription', () => {
      expect(getAccessLevel('basic')).toBe('has limited access');
    });

    it('should return default access for unknown subscription', () => {
      expect(getAccessLevel('none')).toBe('has no access');
      expect(getAccessLevel('unknown')).toBe('has no access');
      expect(getAccessLevel('')).toBe('has no access');
    });

    it('should handle null, undefined, number as subscription', () => {
      expect(getAccessLevel(null)).toBe('has no access');
      expect(getAccessLevel(undefined)).toBe('has no access');
      expect(getAccessLevel(123)).toBe('has no access');
    });

    it('should handle case-insensitive subscription', () => {
      expect(getAccessLevel('Premium')).toBe('has access to all features');
      expect(getAccessLevel('BASIC')).toBe('has limited access');
    });
  });

  describe('analyzeUser', () => {
    it('should analyze valid user correctly', () => {
      const user = {
        name: 'Alice',
        age: 25,
        email: 'alice@example.com',
        subscription: 'premium',
      };
      const result = analyzeUser(user);

      expect(result).toEqual({
        name: 'Alice',
        ageStatus: 'is an adult',
        emailStatus: 'email is valid',
        accessStatus: 'has access to all features',
      });
    });

    it('should handle user with invalid email', () => {
      const user = {
        name: 'Bob',
        age: 17,
        email: 'bobexample.com',
        subscription: 'basic',
      };
      const result = analyzeUser(user);

      expect(result.emailStatus).toBe('email is invalid');
    });

    it('should return null for invalid input', () => {
      expect(analyzeUser(null)).toBeNull();
      expect(analyzeUser(undefined)).toBeNull();
      expect(analyzeUser('not an object')).toBeNull();
    });

    it('should handle edge case: age exactly 18', () => {
      const user = {
        name: 'Charlie',
        age: 18,
        email: 'charlie@example.com',
        subscription: 'basic',
      };
      const result = analyzeUser(user);

      expect(result.ageStatus).toBe('is an adult');
    });

    it('should handle user with missing fields', () => {
      const user = { name: 'NoEmail', age: 20 };
      const result = analyzeUser(user);
      expect(result.emailStatus).toBe('email is invalid');
      expect(result.accessStatus).toBe('has no access');
    });

    it('should handle user with wrong types', () => {
      const user = { name: 'WrongTypes', age: '20', email: 123, subscription: [] };
      const result = analyzeUser(user);
      expect(result.ageStatus).toBe('is an adult');
      expect(result.emailStatus).toBe('email is invalid');
      expect(result.accessStatus).toBe('has no access');
    });
  });

  describe('processUsers', () => {
    it('should process valid users array', () => {
      const users = [
        {
          name: 'Alice',
          age: 25,
          email: 'alice@example.com',
          subscription: 'premium',
        },
      ];

      processUsers(users);

      expect(consoleSpy.log).toHaveBeenCalled();
      expect(consoleSpy.error).not.toHaveBeenCalled();
    });

    it('should handle error for non-array input', () => {
      processUsers('not an array');

      expect(consoleSpy.error).toHaveBeenCalledWith(
        'Invalid input: users must be an array'
      );
    });

    it('should handle empty array', () => {
      processUsers([]);

      expect(consoleSpy.log).not.toHaveBeenCalled();
    });

    it('should handle null input gracefully', () => {
      processUsers(null);

      expect(consoleSpy.error).toHaveBeenCalled();
    });

    it('should process multiple users correctly', () => {
      const users = [
        {
          name: 'Alice',
          age: 25,
          email: 'alice@example.com',
          subscription: 'premium',
        },
        {
          name: 'Bob',
          age: 17,
          email: 'bob@example.com',
          subscription: 'basic',
        },
      ];

      processUsers(users);

      expect(consoleSpy.log).toHaveBeenCalledTimes(6); // 3 logs per user
    });

    it('should handle array with non-object elements', () => {
      processUsers([null, 42, {}, { name: 'Test', age: 19, email: 'a@b.com', subscription: 'premium' }]);
      expect(consoleSpy.log).toHaveBeenCalled();
      expect(consoleSpy.error).not.toHaveBeenCalled();
    });
  });
});
