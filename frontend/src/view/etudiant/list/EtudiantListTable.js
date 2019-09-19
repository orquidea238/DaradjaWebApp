import { Table, Popconfirm } from 'antd';
import { i18n } from 'i18n';
import actions from 'modules/etudiant/list/etudiantListActions';
import destroyActions from 'modules/etudiant/destroy/etudiantDestroyActions';
import selectors from 'modules/etudiant/list/etudiantListSelectors';
import destroySelectors from 'modules/etudiant/destroy/etudiantDestroySelectors';
import model from 'modules/etudiant/etudiantModel';
import etudiantSelectors from 'modules/etudiant/etudiantSelectors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TableWrapper from 'view/shared/styles/TableWrapper';
import ButtonLink from 'view/shared/styles/ButtonLink';
import UserListItem from 'view/iam/list/users/UserListItem';
import BookingListItem from 'view/booking/list/BookingListItem';

const { fields } = model;

class EtudiantListTable extends Component {
  handleTableChange = (pagination, filters, sorter) => {
    const { dispatch } = this.props;

    dispatch(
      actions.doChangePaginationAndSort(pagination, sorter),
    );
  };

  doDestroy = (id) => {
    const { dispatch } = this.props;
    dispatch(destroyActions.doDestroy(id));
  };

  columns = [
    fields.id.forTable(),
    fields.nom.forTable(),
    fields.prenom.forTable(),
    fields.mentor.forTable({
      render: (value) => <UserListItem value={value} />,
    }),
    fields.genre.forTable(),
    fields.telephone.forTable(),
    fields.bookings.forTable({
      render: (value) => <BookingListItem value={value} />,
    }),
    fields.createdAt.forTable(),
    {
      title: '',
      dataIndex: '',
      width: '160px',
      render: (_, record) => (
        <div className="table-actions">
          <Link to={`/etudiant/${record.id}`}>
            {i18n('common.view')}
          </Link>
          {this.props.hasPermissionToEdit && (
            <Link to={`/etudiant/${record.id}/edit`}>
              {i18n('common.edit')}
            </Link>
          )}
          {this.props.hasPermissionToDestroy && (
            <Popconfirm
              title={i18n('common.areYouSure')}
              onConfirm={() => this.doDestroy(record.id)}
              okText={i18n('common.yes')}
              cancelText={i18n('common.no')}
            >
              <ButtonLink>
                {i18n('common.destroy')}
              </ButtonLink>
            </Popconfirm>
          )}
        </div>
      ),
    },
  ];

  rowSelection = () => {
    return {
      selectedRowKeys: this.props.selectedKeys,
      onChange: (selectedRowKeys) => {
        const { dispatch } = this.props;
        dispatch(actions.doChangeSelected(selectedRowKeys));
      },
    };
  };

  render() {
    const { pagination, rows, loading } = this.props;

    return (
      <TableWrapper>
        <Table
          rowKey="id"
          loading={loading}
          columns={this.columns}
          dataSource={rows}
          pagination={pagination}
          onChange={this.handleTableChange}
          rowSelection={this.rowSelection()}
          scroll={{ x: true }}
        />
      </TableWrapper>
    );
  }
}

function select(state) {
  return {
    loading:
      selectors.selectLoading(state) ||
      destroySelectors.selectLoading(state),
    rows: selectors.selectRows(state),
    pagination: selectors.selectPagination(state),
    filter: selectors.selectFilter(state),
    selectedKeys: selectors.selectSelectedKeys(state),
    hasPermissionToEdit: etudiantSelectors.selectPermissionToEdit(
      state,
    ),
    hasPermissionToDestroy: etudiantSelectors.selectPermissionToDestroy(
      state,
    ),
  };
}

export default connect(select)(EtudiantListTable);
