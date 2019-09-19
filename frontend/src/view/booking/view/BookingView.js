import model from 'modules/booking/bookingModel';
import React, { Component } from 'react';
import Spinner from 'view/shared/Spinner';
import ViewWrapper from 'view/shared/styles/ViewWrapper';
import TextViewItem from 'view/shared/view/TextViewItem';
import UserViewItem from 'view/iam/view/UserViewItem';
import EtudiantViewItem from 'view/etudiant/view/EtudiantViewItem';

const { fields } = model;

class BookingView extends Component {
  renderView() {
    const { record } = this.props;

    return (
      <ViewWrapper>
        <TextViewItem
          label={fields.id.label}
          value={fields.id.forView(record.id)}
        />

        <UserViewItem
          label={fields.mentor.label}
          value={fields.mentor.forView(record.mentor)}
        />

        <EtudiantViewItem
          label={fields.etudiant.label}
          value={fields.etudiant.forView(record.etudiant)}
        />

        <TextViewItem
          label={fields.debut.label}
          value={fields.debut.forView(record.debut)}
        />

        <TextViewItem
          label={fields.fin.label}
          value={fields.fin.forView(record.fin)}
        />

        <TextViewItem
          label={fields.commentaires.label}
          value={fields.commentaires.forView(record.commentaires)}
        />

        <TextViewItem
          label={fields.status.label}
          value={fields.status.forView(record.status)}
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

export default BookingView;
