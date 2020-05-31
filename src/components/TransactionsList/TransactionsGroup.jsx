/* eslint-disable no-param-reassign */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-return-assign */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Segment, Divider, Grid, Header,
} from 'semantic-ui-react';
import TransactionsItem from './TransactionItem';

export default class TransactionsGroups extends Component {
  getSumAmount = (transactions) =>
    transactions.reduce((acc, cur) => acc += cur.operationAmount, 0)

  render() {
    const { date, transactions } = this.props;
    const sumAmount = this.getSumAmount(transactions);

    const amountStyles = {
      color: (sumAmount < 0) ? '#e05959' : '#33a933',
    };

    return (
      <Segment>
        <Grid padded>
          <Grid.Row columns={2}>
            <Grid.Column textAlign="left">
              <p>{date}</p>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Header style={amountStyles} as="h3">{`${sumAmount} UAH`}</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
        {
          transactions.map((transaction, index) => (
            <>
              <TransactionsItem key={transaction.id} transaction={transaction} />
              {
                (index !== transactions.length - 1)
                  ? <Divider />
                  : null
              }
            </>
          ))
        }
      </Segment>
    );
  }
}
