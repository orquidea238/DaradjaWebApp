import React, { Component } from 'react';
import EtudiantListFilter from 'view/etudiant/list/EtudiantListFilter';
import EtudiantListTable from 'view/etudiant/list/EtudiantListTable';
import EtudiantListToolbar from 'view/etudiant/list/EtudiantListToolbar';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import { i18n } from 'i18n';

class EtudiantListPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.etudiant.menu')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.etudiant.list.title')}
          </PageTitle>

          <EtudiantListToolbar />
          <EtudiantListFilter />
          <EtudiantListTable />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

export default EtudiantListPage;
