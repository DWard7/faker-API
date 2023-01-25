const { faker } = require("@faker-js/faker");

class Company {
  constructor() {
    this._id = faker.datatype.uuid(),
    this.name = faker.company.name(),
    this.address = faker.address.streetAddress(),
    this.city = faker.address.city(),
    this.state = faker.address.state(),
    this.zipCode = faker.address.zipCode(),
    this.country = faker.address.country()
  }
}

const companies = [
  new Company()
]

module.exports = {Company, companies}