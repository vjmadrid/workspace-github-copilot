function isAdult(user) {
  return user.age >= 18;
}

function isValidEmail(email) {
  return email.includes('@');
}

function getSubscriptionMessage(user) {
  switch (user.subscription) {
    case 'premium':
      return `${user.name} has access to all features.`;
    case 'basic':
      return `${user.name} has limited access.`;
    default:
      return `${user.name} has no access.`;
  }
}

function processUsers(users) {
  users.forEach(user => {
    console.log(`${user.name} is ${isAdult(user) ? 'an adult' : 'not an adult'}.`);
    console.log(isValidEmail(user.email) ? 'Email is valid.' : 'Invalid email.');
    console.log(getSubscriptionMessage(user));
  });
}

const users = [
  { name: 'Alice', age: 25, email: 'alice@example.com', subscription: 'premium' },
  { name: 'Bob', age: 17, email: 'bobexample.com', subscription: 'basic' },
  { name: 'Charlie', age: 30, email: 'charlie@example.com', subscription: 'none' },
];

processUsers(users);