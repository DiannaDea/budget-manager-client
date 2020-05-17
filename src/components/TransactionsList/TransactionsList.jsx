/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { flatFilters, transformFiltersToRequestParams } from '../../utils/filters';

export default class TransactionsList extends Component {
  componentDidUpdate(prevProps) {
    const {
      groups, filters, getTransactions, pagination,
    } = this.props;

    if ((prevProps.filters !== filters) || (prevProps.pagination.page !== pagination.page)) {
      const { appliedFilters, dateRange } = flatFilters(filters);
      const reqParams = transformFiltersToRequestParams(groups, appliedFilters, dateRange);

      getTransactions({
        ...reqParams,
        ...pagination,
      });
    }
  }

  render() {
    // const { transactions } = this.props;

    return (
      <p>List</p>
    );
  }
}
