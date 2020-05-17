/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { flatFilters, transformFiltersToRequestParams } from '../../utils/filters';
import TransactionsGroups from './TransactionsGroup';

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

  getTransactions = () => {
    const { transactions } = this.props;
    if (!transactions) {
      return [];
    }
    return Object.entries(transactions.rows);
  }

  render() {
    const transactionGroups = this.getTransactions();

    return (
      <>
        {
          transactionGroups.map((group) => (
            <TransactionsGroups
              transactions={group[1]}
              date={group[0]}
              key={group[0]}
            />
          ))
        }
      </>
    );
  }
}
