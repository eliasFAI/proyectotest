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
function getUsersArray(number_User)
{
    var  userArray = new Array(number_User).fill(getUser());
      
  return userArray ;
}

getUsersArray(2).forEach(function(elemento,indice,Array){
console.log(elemento,indice);
});


