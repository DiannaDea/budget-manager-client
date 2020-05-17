/* eslint-disable react/prefer-stateless-function */
import { chunk } from 'lodash';
import React, { Component } from 'react';
import {
  Grid, Icon, Image, Card,
} from 'semantic-ui-react';

const TransactionHeader = ({ text }) => (
  <Card.Description>
    <Grid>
      <Grid.Row columns={1}>
        <Grid.Column width={16}>
          <p>{text}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Card.Description>
);

const TransactionRow = ({ leftText, rightText }) => (
  <Card.Description>
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column width={3}>
          <p>{leftText}</p>
        </Grid.Column>
        <Grid.Column width={8}>
          <p>{rightText}</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Card.Description>
);

export default class TransactionsItem extends Component {
  getCardNumber = (cardNumber) => {
    if (!cardNumber) {
      return '';
    }

    const arr = cardNumber.split('');
    const chunks = chunk(arr, 4);
    return chunks.reduce((res, ch) => res.concat(` ${ch.join('')}`), '');
  }

  getBankInfo = () => {
    const { transaction } = this.props;

    if (!transaction) {
      return '';
    }

    const cardNumber = this.getCardNumber(transaction.card.cardNumber);
    return `${transaction.bank.name}, ${cardNumber}`;
  }

  render() {
    const { transaction } = this.props;

    return (
      <Grid padded>
        <Grid.Row columns={3} textAlign="center">

          <Grid.Column width={2}>
            <Image
              as={Icon}
              name="credit card outline"
              floated="left"
              size="big"
              circular
              color="grey"
              inverted
            />
          </Grid.Column>

          <Grid.Column width={12} textAlign="left">
            <TransactionHeader text={transaction.description} />
            <TransactionRow leftText="Bank" rightText={this.getBankInfo()} />
            <TransactionRow leftText="Group" rightText={transaction.group.name} />
          </Grid.Column>

          <Grid.Column width={2} textAlign="left">
            {`${transaction.operationAmount} ${transaction.currency}`}
          </Grid.Column>

        </Grid.Row>
      </Grid>
    );
  }
}
