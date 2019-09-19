module.exports = (app) => {
  app.post(`/etudiant`, require('./etudiantCreate'));
  app.put(`/etudiant/:id`, require('./etudiantUpdate'));
  app.post(`/etudiant/import`, require('./etudiantImport'));
  app.delete(`/etudiant`, require('./etudiantDestroy'));
  app.get(
    `/etudiant/autocomplete`,
    require('./etudiantAutocomplete'),
  );
  app.get(`/etudiant`, require('./etudiantList'));
  app.get(`/etudiant/:id`, require('./etudiantFind'));
};
