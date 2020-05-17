/* eslint-disable react/prefer-stateless-function */
import { chunk } from 'lodash';
import React, { Component } from 'react';
import {
  Grid, Icon, Image, Card, Button,
} from 'semantic-ui-react';

const categoriesMapping = {
  food: 'food',
  sport: 'football ball',
  transport: 'car',
  beauty: 'star outline',
  health: 'heart outline',
  purchase: 'money bill alternate outline',
  transfer: 'angle double left',
  other: 'setting',
};

const colorsMapping = {
  food: 'orange',
  sport: 'blue',
  transport: 'brown',
  beauty: 'purple',
  health: 'olive',
  purchase: 'teal',
  transfer: 'yellow',
  other: 'grey',
};

const TransactionHeader = ({ text, styles }) => (
  <Card.Description>
    <Grid>
      <Grid.Row columns={1}>
        <Grid.Column width={16}>
          <p style={styles}>{text}</p>
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

    const amountStyles = {
      color: (transaction.operationAmount < 0) ? '#e05959' : '#33a933',
    };

    const descriptionStyles = {
      fontWeight: 'bold',
    };

    return (
      <Grid padded>
        <Grid.Row columns={4} textAlign="center">

          <Grid.Column width={2}>
            <Image
              as={Icon}
              name={categoriesMapping[transaction.category.internalName]}
              floated="left"
              size="big"
              circular
              color={colorsMapping[transaction.category.internalName]}
              inverted
            />
          </Grid.Column>

          <Grid.Column width={9} textAlign="left">
            <TransactionHeader text={transaction.description} styles={descriptionStyles} />
            <TransactionRow leftText="Bank" rightText={this.getBankInfo()} />
            <TransactionRow leftText="Group" rightText={transaction.group.name} />
          </Grid.Column>

          <Grid.Column width={3} textAlign="left">
            <h4 style={amountStyles}>{`${transaction.operationAmount} ${transaction.currency}`}</h4>
          </Grid.Column>

          <Grid.Column width={2}>
            <Button.Group>
              <Button icon>
                <Icon name="edit outline" />
              </Button>
              <Button icon>
                <Icon name="trash alternate outline" />
              </Button>
            </Button.Group>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    );
  }
}
