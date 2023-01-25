const { faker } = require('@faker-js/faker')

class User {
  constructor() {
    this.password = faker.internet.password(),
    this.email = faker.internet.email(),
    this.phoneNumber = faker.phone.number(),
    this.lastName = faker.name.lastName(),
    this.firstName = faker.name.firstName(),
    this._id = faker.datatype.uuid()
  }
}

const users = [
  new User()
]

module.exports = { User, users }