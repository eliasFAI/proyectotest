const { random, fake } = require('faker');
var faker = require('faker');

function getUser() {
  const randomName = faker.name.findName(); // Rowan Nikolaus
  const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
  const randomPassword = faker.internet.password(); // random password

  const myUser = {
    id: faker.datatype.uuid(),
    name: randomName,
    email: randomEmail,
    password: randomPassword,
  };

  return myUser;
}
function getUsersArray(number_User) {
  const userArray = new Array(number_User).fill().map(getUser);

  return userArray;
}
function getSearchForUser(user) {
  const mySearch = {
    id: faker.datatype.uuid(),
    owner: user.name,
    name: faker.name.findName(),
    createdAt: faker.internet.email(),
  };
  return mySearch;
}
/**
 * getSearchesArrayForUser(user, amount)(a function that
 * returns an array of searches with the user passed by
 * param as the owner, the amount is passed by params)
 */

function getSearchesArrayForUser(user, amount) {
  const searchArray = new Array(amount)
    .fill()
    .map(() => getSearchForUser(user));

  return searchArray;
}

/**
 * getSearchesArrayForUsers(users, min, max)(a function
 * that returns an array of searches for an array of users
 * passes by param, the amount of searches for every user is
 * between the min and max values passed by param)
 */

function getSearchesArrayForUser(users, min, max) {
  const searchesArrayForUser = new Array(users.length);

  for (var i = 0; i < users.length; i++) {
    searchesArrayForUser.map(() =>
      getSearchesArrayForUser(users[i], getRandomArbitrary(min, max))
    );
  }
  return searchesArrayForUser;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
//console.log(parseInt(getRandomArbitrary(2, 9)));
const data = { users: getUsersArray(10) };
module.exports = data;
console.log(getSearchesArrayForUser(getUsersArray(5), 2, 4));
