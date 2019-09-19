import importerActions from 'modules/shared/importer/importerActions';
import selectors from 'modules/etudiant/importer/etudiantImporterSelectors';
import EtudiantService from 'modules/etudiant/etudiantService';
import fields from 'modules/etudiant/importer/etudiantImporterFields';
import { i18n } from 'i18n';

export default importerActions(
  'ETUDIANT_IMPORTER',
  selectors,
  EtudiantService.import,
  fields,
  i18n('entities.etudiant.importer.fileName'),
);
