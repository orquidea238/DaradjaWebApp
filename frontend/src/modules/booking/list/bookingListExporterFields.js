import model from 'modules/booking/bookingModel';

const { fields } = model;

export default [
  fields.id,
  fields.mentor,
  fields.etudiant,
  fields.debut,
  fields.fin,
  fields.commentaires,
  fields.status,
  fields.createdAt,
  fields.updatedAt
];
