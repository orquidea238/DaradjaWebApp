import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import IntegerField from 'modules/shared/fields/integerField';
import IntegerRangeField from 'modules/shared/fields/integerRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import DateField from 'modules/shared/fields/dateField';
import DateRangeField from 'modules/shared/fields/dateRangeField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';
import RelationToManyField from 'modules/shared/fields/relationToManyField';
import ImagesField from 'modules/shared/fields/imagesField';

function label(name) {
  return i18n(`entities.etudiant.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.etudiant.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  nom: new StringField('nom', label('nom'), {
    "max": 255,
    "required": true
  }),
  prenom: new StringField('prenom', label('prenom'), {
    "max": 255,
    "required": true
  }),
  mentor: new RelationToOneField('mentor', label('mentor'), {}),
  adresse: new StringField('adresse', label('adresse'), {
    "max": 255
  }),
  age: new IntegerField('age', label('age'), {
    "required": true
  }),
  genre: new EnumeratorField('genre', label('genre'), [
    { id: 'homme', label: enumeratorLabel('genre', 'homme') },
    { id: 'femme', label: enumeratorLabel('genre', 'femme') },
  ],{
    "required": true
  }),
  diplomes: new StringField('diplomes', label('diplomes'), {
    "required": true
  }),
  domaineetudes: new StringField('domaineetudes', label('domaineetudes'), {
    "required": true
  }),
  entreeenfrance: new DateField('entreeenfrance', label('entreeenfrance'), {}),
  paysobtentionbac: new StringField('paysobtentionbac', label('paysobtentionbac'), {
    "required": true
  }),
  metiervise: new StringField('metiervise', label('metiervise'), {
    "max": 255
  }),
  dateentreechezdaradja: new DateField('dateentreechezdaradja', label('dateentreechezdaradja'), {
    "required": true
  }),
  jobetudiant: new StringField('jobetudiant', label('jobetudiant'), {}),
  langues: new StringField('langues', label('langues'), {
    "required": true
  }),
  niveaufrancais: new EnumeratorField('niveaufrancais', label('niveaufrancais'), [
    { id: 'debutant', label: enumeratorLabel('niveaufrancais', 'debutant') },
    { id: 'intermediaire', label: enumeratorLabel('niveaufrancais', 'intermediaire') },
    { id: 'confirme', label: enumeratorLabel('niveaufrancais', 'confirme') },
  ],{
    "required": true
  }),
  stages: new StringField('stages', label('stages'), {
    "max": 255
  }),
  debutmentorat: new DateField('debutmentorat', label('debutmentorat'), {}),
  finmentorat: new DateField('finmentorat', label('finmentorat'), {}),
  telephone: new IntegerField('telephone', label('telephone'), {}),
  imageprofil: new ImagesField('imageprofil', label('imageprofil'), 'etudiant/imageprofil',{
    "size": 3000000
  }),
  bookings: new RelationToManyField('bookings', label('bookings'), {}),
  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
  ageRange: new IntegerRangeField(
    'ageRange',
    label('ageRange'),
  ),
  entreeenfranceRange: new DateRangeField(
    'entreeenfranceRange',
    label('entreeenfranceRange'),
  ),
  dateentreechezdaradjaRange: new DateRangeField(
    'dateentreechezdaradjaRange',
    label('dateentreechezdaradjaRange'),
  ),
  debutmentoratRange: new DateRangeField(
    'debutmentoratRange',
    label('debutmentoratRange'),
  ),
  finmentoratRange: new DateRangeField(
    'finmentoratRange',
    label('finmentoratRange'),
  ),
  telephoneRange: new IntegerRangeField(
    'telephoneRange',
    label('telephoneRange'),
  ),
};

export default {
  fields,
};
