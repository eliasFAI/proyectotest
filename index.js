/*const { random } = require('faker');
var faker = require('faker');
    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties
console.log(randomName,randomEmail,randomCard);*/
function getUser()
{
    const { random } = require('faker');
    var faker = require('faker');
    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard(); // random contact card containing many properties
    
    var myUser = {
                 name: randomName,
                 email: randomEmail,
                 card:randomCard
                 }

  return myUser;
}
function getUsersArray(n)
{
    var  userArray =[] ;
    for (i=0 ; i<n ; i++) {

         userArray[i] = getUser();
        
      }
  return userArray ;
}

var list = getUsersArray(10);
console.log(list[0]);

