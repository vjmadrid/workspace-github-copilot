
const SUBSCRIPTION = {
  PREMIUM: 'premium',
  BASIC: 'basic',
  NONE: 'none',
};

function isAdult(user) {
  return user.age >= 18;
}

function isValidEmail(user) {
  return typeof user.email === 'string' && user.email.includes('@');
}

function getSubscriptionMessage(user) {
  switch (user.subscription) {
    case SUBSCRIPTION.PREMIUM:
      return `${user.name} has access to all features.`;
    case SUBSCRIPTION.BASIC:
      return `${user.name} has limited access.`;
    default:
      return `${user.name} has no access.`;
  }
}

function printUserInfo(user) {
  console.log('*******************************');
  console.log(
    isAdult(user)
      ? `${user.name} is an adult.`
      : `${user.name} is not an adult.`
  );
  console.log(
    isValidEmail(user)
      ? `${user.name} email is valid.`
      : `${user.name} email is invalid.`
  );
  console.log(getSubscriptionMessage(user));
}

function processUsers(users) {
  users.forEach(printUserInfo);
}


const users = [
  { name: 'Alice', age: 25, email: 'alice@example.com', subscription: SUBSCRIPTION.PREMIUM },
  { name: 'Bob', age: 17, email: 'bobexample.com', subscription: SUBSCRIPTION.BASIC },
  { name: 'Charlie', age: 30, email: 'charlie@example.com', subscription: SUBSCRIPTION.NONE },
];

processUsers(users);
