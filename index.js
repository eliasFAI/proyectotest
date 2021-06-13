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
    var  userArray = new Array(n);
      for(var i=0;i<n;i++){
             userArray.push(getUser());
      }
  return userArray ;
}

getUsersArray(10).forEach(function(elemento,indice,Array){
console.log(elemento,indice);
});


