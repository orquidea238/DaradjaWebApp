import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import EtudiantForm from 'view/etudiant/form/EtudiantForm';
import { i18n } from 'i18n';

class EtudiantFormPage extends Component {
  isEditing = () => {
    const { match } = this.props;
    return !!match.params.id;
  };

  title = () => {
    return this.isEditing()
      ? i18n('entities.etudiant.edit.title')
      : i18n('entities.etudiant.new.title');
  };

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.etudiant.menu'), '/etudiant'],
            [this.title()],
          ]}
        />

        <ContentWrapper>
          <PageTitle>{this.title()}</PageTitle>

          <EtudiantForm match={this.props.match} />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default EtudiantFormPage;
