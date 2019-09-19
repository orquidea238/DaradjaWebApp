import React, { Component } from 'react';
import ContentWrapper from 'view/layout/styles/ContentWrapper';
import PageTitle from 'view/shared/styles/PageTitle';
import Breadcrumb from 'view/shared/Breadcrumb';
import EtudiantView from 'view/etudiant/view/EtudiantView';
import { i18n } from 'i18n';
import actions from 'modules/etudiant/view/etudiantViewActions';
import { connect } from 'react-redux';
import selectors from 'modules/etudiant/view/etudiantViewSelectors';
import EtudiantViewToolbar from 'view/etudiant/view/EtudiantViewToolbar';

class EtudiantPage extends Component {
  componentDidMount() {
    const { dispatch, match } = this.props;
    dispatch(actions.doFind(match.params.id));
  }

  render() {
    return (
      <React.Fragment>
        <Breadcrumb
          items={[
            [i18n('home.menu'), '/'],
            [i18n('entities.etudiant.menu'), '/etudiant'],
            [i18n('entities.etudiant.view.title')],
          ]}
        />

        <ContentWrapper>
          <PageTitle>
            {i18n('entities.etudiant.view.title')}
          </PageTitle>

          <EtudiantViewToolbar match={this.props.match} />

          <EtudiantView
            loading={this.props.loading}
            record={this.props.record}
          />
        </ContentWrapper>
      </React.Fragment>
    );
  }
}

function select(state) {
  return {
    loading: selectors.selectLoading(state),
    record: selectors.selectRecord(state),
  };
}

export default connect(select)(EtudiantPage);
