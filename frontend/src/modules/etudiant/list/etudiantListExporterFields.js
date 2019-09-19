import model from 'modules/etudiant/etudiantModel';

const { fields } = model;

export default [
  fields.id,
  fields.nom,
  fields.prenom,
  fields.mentor,
  fields.adresse,
  fields.age,
  fields.genre,
  fields.telephone,
  fields.bookings,
  fields.createdAt,
  fields.updatedAt
];
