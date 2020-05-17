/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import TransactionsItem from './TransactionItem';

export default class TransactionsGroups extends Component {
  render() {
    const { date, transactions } = this.props;

    return (
      <Segment>
        <p>{date}</p>
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
