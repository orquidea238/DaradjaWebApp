import list from 'modules/etudiant/list/etudiantListReducers';
import form from 'modules/etudiant/form/etudiantFormReducers';
import view from 'modules/etudiant/view/etudiantViewReducers';
import destroy from 'modules/etudiant/destroy/etudiantDestroyReducers';
import importerReducer from 'modules/etudiant/importer/etudiantImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
