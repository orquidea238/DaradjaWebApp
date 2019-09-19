import model from 'modules/etudiant/etudiantModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import UserViewItem from 'view/iam/view/UserViewItem';
import ImagesViewItem from 'view/shared/view/ImagesViewItem';
import BookingViewItem from 'view/booking/view/BookingViewItem';

const { fields } = model;

class EtudiantView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <TextViewItem
          label={fields.nom.label}
          value={fields.nom.forView(record.nom)}
        />

        <TextViewItem
          label={fields.prenom.label}
          value={fields.prenom.forView(record.prenom)}
        />

        <UserViewItem
          label={fields.mentor.label}
          value={fields.mentor.forView(record.mentor)}
        />

        <TextViewItem
          label={fields.adresse.label}
          value={fields.adresse.forView(record.adresse)}
        />

        <TextViewItem
          label={fields.age.label}
          value={fields.age.forView(record.age)}
        />

        <TextViewItem
          label={fields.genre.label}
          value={fields.genre.forView(record.genre)}
        />

        <TextViewItem
          label={fields.diplomes.label}
          value={fields.diplomes.forView(record.diplomes)}
        />

        <TextViewItem
          label={fields.domaineetudes.label}
          value={fields.domaineetudes.forView(record.domaineetudes)}
        />

        <TextViewItem
          label={fields.entreeenfrance.label}
          value={fields.entreeenfrance.forView(record.entreeenfrance)}
        />

        <TextViewItem
          label={fields.paysobtentionbac.label}
          value={fields.paysobtentionbac.forView(record.paysobtentionbac)}
        />

        <TextViewItem
          label={fields.metiervise.label}
          value={fields.metiervise.forView(record.metiervise)}
        />

        <TextViewItem
          label={fields.dateentreechezdaradja.label}
          value={fields.dateentreechezdaradja.forView(record.dateentreechezdaradja)}
        />

        <TextViewItem
          label={fields.jobetudiant.label}
          value={fields.jobetudiant.forView(record.jobetudiant)}
        />

        <TextViewItem
          label={fields.langues.label}
          value={fields.langues.forView(record.langues)}
        />

        <TextViewItem
          label={fields.niveaufrancais.label}
          value={fields.niveaufrancais.forView(record.niveaufrancais)}
        />

        <TextViewItem
          label={fields.stages.label}
          value={fields.stages.forView(record.stages)}
        />

        <TextViewItem
          label={fields.debutmentorat.label}
          value={fields.debutmentorat.forView(record.debutmentorat)}
        />

        <TextViewItem
          label={fields.finmentorat.label}
          value={fields.finmentorat.forView(record.finmentorat)}
        />

        <TextViewItem
          label={fields.telephone.label}
          value={fields.telephone.forView(record.telephone)}
        />

        <ImagesViewItem
          label={fields.imageprofil.label}
          value={fields.imageprofil.forView(record.imageprofil)}
        />

        <BookingViewItem
          label={fields.bookings.label}
          value={fields.bookings.forView(record.bookings)}
        />

        <TextViewItem
          label={fields.createdAt.label}
          value={fields.createdAt.forView(record.createdAt)}
        />

        <TextViewItem
          label={fields.updatedAt.label}
          value={fields.updatedAt.forView(record.updatedAt)}
        />
      </ViewWrapper>
    );
  }

  render() {
    const { record, loading } = this.props;

    if (loading || !record) {
      return <Spinner />;
    }

    return this.renderView();
  }
}

export default EtudiantView;
