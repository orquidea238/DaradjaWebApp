const genericFixture = require('./genericFixture');
const EtudiantRepository = require('../database/repositories/etudiantRepository');

const etudiantFixture = genericFixture({
  idField: 'id',
  createFn: (data) => new EtudiantRepository().create(data),
  data: [
    {
      id: '1',
      // Add attributes here
    },
  ],
});

module.exports = etudiantFixture;
