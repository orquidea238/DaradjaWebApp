import { i18n } from 'i18n';
import IdField from 'modules/shared/fields/idField';
import DateTimeField from 'modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'modules/shared/fields/dateTimeRangeField';
import StringField from 'modules/shared/fields/stringField';
import EnumeratorField from 'modules/shared/fields/enumeratorField';
import RelationToOneField from 'modules/shared/fields/relationToOneField';

function label(name) {
  return i18n(`entities.booking.fields.${name}`);
}

function enumeratorLabel(name, value) {
  return i18n(`entities.booking.enumerators.${name}.${value}`);
}

const fields = {
  id: new IdField('id', label('id')),
  mentor: new RelationToOneField('mentor', label('mentor'), {}),
  etudiant: new RelationToOneField('etudiant', label('etudiant'), {}),
  debut: new DateTimeField('debut', label('debut'), {
    "required": true
  }),
  fin: new DateTimeField('fin', label('fin'), {
    "required": true
  }),
  commentaires: new StringField('commentaires', label('commentaires'), {
    "required": true
  }),
  status: new EnumeratorField('status', label('status'), [
    { id: 'avenir', label: enumeratorLabel('status', 'avenir') },
    { id: 'encours', label: enumeratorLabel('status', 'encours') },
    { id: 'passe', label: enumeratorLabel('status', 'passe') },
    { id: 'annule', label: enumeratorLabel('status', 'annule') },
  ],{}),
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
  debutRange: new DateTimeRangeField(
    'debutRange',
    label('debutRange'),
  ),
  finRange: new DateTimeRangeField(
    'finRange',
    label('finRange'),
  ),
};

export default {
  fields,
};
