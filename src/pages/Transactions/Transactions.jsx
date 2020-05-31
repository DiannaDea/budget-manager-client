/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Grid, Header, Pagination } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import TransactionsFilter from '../../components/TransactionsFilter';
import TransactionsList from '../../components/TransactionsList';
import CreateTransactionModal from '../../components/CreateTransaction';

export default withTranslation()(class Transactions extends Component {
  state = {
    pagination: {
      limit: 5,
      page: 1,
    },
  };

  getTotalPages = () => {
    const { pagination: { limit } } = this.state;
    const { transactions: { count } } = this.props;

    return Math.ceil(count / limit);
  }

  onPageChange = (event, { activePage }) => {
    const { pagination } = this.state;

    this.setState({
      pagination: {
        ...pagination,
        page: activePage,
      },
    });
  }

  render() {
    const { pagination } = this.state;
    const { transactions, t } = this.props;

    return (
      <Grid>

        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            <Header as="h2">{t('transactionsTab')}</Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1} textAlign="right">
          <Grid.Column>
            <CreateTransactionModal />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column floated="left" width={12}>
            <TransactionsList pagination={pagination} />
          </Grid.Column>
          <Grid.Column floated="right" width={4}>
            <TransactionsFilter pagination={pagination} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            {
              (transactions)
                ? (
                  <Pagination
                    defaultActivePage={pagination.page}
                    totalPages={this.getTotalPages()}
                    onPageChange={this.onPageChange}
                  />
                )
                : null
            }
          </Grid.Column>
        </Grid.Row>

      </Grid>
    );
  }
});
