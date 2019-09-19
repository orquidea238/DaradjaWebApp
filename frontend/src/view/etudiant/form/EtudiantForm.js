import { Button, Form } from 'antd';
import { Formik } from 'formik';
import { i18n } from 'i18n';
import actions from 'modules/etudiant/form/etudiantFormActions';
import selectors from 'modules/etudiant/form/etudiantFormSelectors';
import model from 'modules/etudiant/etudiantModel';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewFormItem from 'view/shared/form/items/ViewFormItem';
import Spinner from 'view/shared/Spinner';
import FormWrapper, {
  tailFormItemLayout,
} from 'view/shared/styles/FormWrapper';
import FormSchema from 'view/shared/form/formSchema';
import InputFormItem from 'view/shared/form/items/InputFormItem';
import TextAreaFormItem from 'view/shared/form/items/TextAreaFormItem';
import InputNumberFormItem from 'view/shared/form/items/InputNumberFormItem';
import UserAutocompleteFormItem from 'view/iam/autocomplete/UserAutocompleteFormItem';
import RadioFormItem from 'view/shared/form/items/RadioFormItem';
import SelectFormItem from 'view/shared/form/items/SelectFormItem';
import DatePickerFormItem from 'view/shared/form/items/DatePickerFormItem';
import ImagesFormItem from 'view/shared/form/items/ImagesFormItem';
import BookingAutocompleteFormItem from 'view/booking/autocomplete/BookingAutocompleteFormItem';

const { fields } = model;

class EtudiantForm extends Component {
  schema = new FormSchema(fields.id, [
    fields.nom,
    fields.prenom,
    fields.mentor,
    fields.adresse,
    fields.age,
    fields.genre,
    fields.diplomes,
    fields.domaineetudes,
    fields.entreeenfrance,
    fields.paysobtentionbac,
    fields.metiervise,
    fields.dateentreechezdaradja,
    fields.jobetudiant,
    fields.langues,
    fields.niveaufrancais,
    fields.stages,
    fields.debutmentorat,
    fields.finmentorat,
    fields.telephone,
    fields.imageprofil,
    fields.bookings,
  ]);

  componentDidMount() {
    const { dispatch, match } = this.props;

    if (this.isEditing()) {
      dispatch(actions.doFind(match.params.id));
    } else {
      dispatch(actions.doNew());
    }
  }

  isEditing = () => {
    const { match } = this.props;
    return !!match.params.id;
  };

  handleSubmit = (values) => {
    const { dispatch } = this.props;
    const { id, ...data } = this.schema.cast(values);

    if (this.isEditing()) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  initialValues = () => {
    const record = this.props.record;

    if (this.isEditing() && record) {
      return this.schema.initialValues(record);
    }

    return this.schema.initialValues();
  };

  renderForm() {
    const { saveLoading } = this.props;

    return (
      <FormWrapper>
        <Formik
          initialValues={this.initialValues()}
          validationSchema={this.schema.schema}
          onSubmit={this.handleSubmit}
          render={(form) => {
            return (
              <Form onSubmit={form.handleSubmit}>
                {this.isEditing() && (
                  <ViewFormItem
                    name={fields.id.name}
                    label={fields.id.label}
                  />
                )}

                <InputFormItem
                  name={fields.nom.name}
                  label={fields.nom.label}
                  required={fields.nom.required}
                  autoFocus
                />
                <InputFormItem
                  name={fields.prenom.name}
                  label={fields.prenom.label}
                  required={fields.prenom.required}
                />
                <UserAutocompleteFormItem
                  name={fields.mentor.name}
                  label={fields.mentor.label}
                  required={fields.mentor.required}
                />
                <InputFormItem
                  name={fields.adresse.name}
                  label={fields.adresse.label}
                  required={fields.adresse.required}
                />
                <InputNumberFormItem
                  name={fields.age.name}
                  label={fields.age.label}
                  required={
                    fields.age.required
                  }
                />
                <RadioFormItem
                  name={fields.genre.name}
                  label={fields.genre.label}
                  options={fields.genre.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  required={fields.genre.required}
                />
                <InputFormItem
                  name={fields.diplomes.name}
                  label={fields.diplomes.label}
                  required={fields.diplomes.required}
                />
                <InputFormItem
                  name={fields.domaineetudes.name}
                  label={fields.domaineetudes.label}
                  required={fields.domaineetudes.required}
                />
                <DatePickerFormItem
                  name={fields.entreeenfrance.name}
                  label={fields.entreeenfrance.label}
                  required={fields.entreeenfrance.required}
                />
                <InputFormItem
                  name={fields.paysobtentionbac.name}
                  label={fields.paysobtentionbac.label}
                  required={fields.paysobtentionbac.required}
                />
                <InputFormItem
                  name={fields.metiervise.name}
                  label={fields.metiervise.label}
                  required={fields.metiervise.required}
                />
                <DatePickerFormItem
                  name={fields.dateentreechezdaradja.name}
                  label={fields.dateentreechezdaradja.label}
                  required={fields.dateentreechezdaradja.required}
                />
                <TextAreaFormItem
                  name={fields.jobetudiant.name}
                  label={fields.jobetudiant.label}
                  required={fields.jobetudiant.required}
                />
                <InputFormItem
                  name={fields.langues.name}
                  label={fields.langues.label}
                  required={fields.langues.required}
                />
                <SelectFormItem
                  name={fields.niveaufrancais.name}
                  label={fields.niveaufrancais.label}
                  options={fields.niveaufrancais.options.map(
                    (item) => ({
                      value: item.id,
                      label: item.label,
                    }),
                  )}
                  required={fields.niveaufrancais.required}
                />
                <TextAreaFormItem
                  name={fields.stages.name}
                  label={fields.stages.label}
                  required={fields.stages.required}
                />
                <DatePickerFormItem
                  name={fields.debutmentorat.name}
                  label={fields.debutmentorat.label}
                  required={fields.debutmentorat.required}
                />
                <DatePickerFormItem
                  name={fields.finmentorat.name}
                  label={fields.finmentorat.label}
                  required={fields.finmentorat.required}
                />
                <InputNumberFormItem
                  name={fields.telephone.name}
                  label={fields.telephone.label}
                  required={
                    fields.telephone.required
                  }
                />
                <ImagesFormItem
                  name={fields.imageprofil.name}
                  label={fields.imageprofil.label}
                  required={fields.imageprofil.required}
                  path={fields.imageprofil.path}
                  schema={{
                    size: fields.imageprofil.size,
                  }}
                  max={fields.imageprofil.max}
                />
                <BookingAutocompleteFormItem
                  name={fields.bookings.name}
                  label={fields.bookings.label}
                  required={fields.bookings.required}
                  mode="multiple"
                />

                <Form.Item
                  className="form-buttons"
                  {...tailFormItemLayout}
                >
                  <Button
                    loading={saveLoading}
                    type="primary"
                    htmlType="submit"
                    icon="save"
                  >
                    {i18n('common.save')}
                  </Button>

                  <Button
                    disabled={saveLoading}
                    onClick={form.handleReset}
                    icon="undo"
                  >
                    {i18n('common.reset')}
                  </Button>
                </Form.Item>
              </Form>
            );
          }}
        />
      </FormWrapper>
    );
  }

  render() {
    const { findLoading, record } = this.props;

    if (findLoading) {
      return <Spinner />;
    }

    if (this.isEditing() && !record) {
      return <Spinner />;
    }

    return this.renderForm();
  }
}

function select(state) {
  return {
    findLoading: selectors.selectFindLoading(state),
    saveLoading: selectors.selectSaveLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(EtudiantForm);
