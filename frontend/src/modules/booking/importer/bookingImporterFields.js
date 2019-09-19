import model from 'modules/booking/bookingModel';

const { fields } = model;

export default [
  fields.mentor,
  fields.etudiant,
  fields.debut,
  fields.fin,
  fields.commentaires,
  fields.status,
];
