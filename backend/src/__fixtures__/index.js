const userFixture = require('./userFixture');
const etudiantFixture = require('./etudiantFixture');
const bookingFixture = require('./bookingFixture');
const AbstractRepository = require('../database/repositories/abstractRepository');

module.exports = {
  user: userFixture,
  etudiant: etudiantFixture,
  booking: bookingFixture,

  async cleanDatabase() {
    await AbstractRepository.cleanDatabase();
  },
};
