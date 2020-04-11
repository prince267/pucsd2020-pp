var faker = require('faker');

var database = {users : []};

for (var i = 1; i<= 10; i++) {
  database.users.push({
    id: i,
    Photo:faker.image.avatar(),
    FirstName: faker.name.firstName(),
    LastName: faker.name.lastName(),
    Email:faker.internet.email(),
    Password:faker.internet.password(),
    ContactNumber:faker.phone.phoneNumberFormat().replace(/-/g,""),
  });
}

console.log(JSON.stringify(database));