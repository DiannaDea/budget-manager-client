/* eslint-disable react/prefer-stateless-function */
import { chunk } from 'lodash';
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import {
  Grid, Icon, Image, Card, Button,
} from 'semantic-ui-react';
import CreateTransactionModal from '../CreateTransaction';
import DeleteTransactionModal from '../DeleteTransactionModal';

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

export default withTranslation()(class TransactionsItem extends Component {
  getCardNumber = (cardNumber) => {
    if (!cardNumber) {
      return '';
    }

    const arr = cardNumber.split('');
    const chunks = chunk(arr, 4);
    return chunks.reduce((res, ch) => res.concat(` ${ch.join('')}`), '');
  }

  getBankInfo = () => {
    const { transaction, t } = this.props;

    if (!transaction) {
      return '';
    }

    if (transaction.card.owner === 1) {
      return t('customTransaction');
    }

    const cardNumber = this.getCardNumber(transaction.card.cardNumber);
    return `${transaction.bank.name}, ${cardNumber}`;
  }

  render() {
    const { transaction, t } = this.props;

    const amountStyles = {
      color: (transaction.operationAmount < 0) ? '#e05959' : '#33a933',
    };

    const descriptionStyles = {
      fontWeight: 'bold',
    };

    const transactionInfo = {
      id: transaction.id,
      groupId: transaction.group.id,
      categoryId: transaction.category.id,
      operationAmount: transaction.operationAmount,
      description: transaction.description,
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
            <TransactionRow leftText={t('bankSelect')} rightText={this.getBankInfo()} />
            <TransactionRow leftText={t('cardItemGroup')} rightText={transaction.group.name} />
          </Grid.Column>

          <Grid.Column width={3} textAlign="left">
            <h4 style={amountStyles}>{`${transaction.operationAmount} ${transaction.currency}`}</h4>
          </Grid.Column>

          <Grid.Column width={2}>
            <Button.Group>
              <CreateTransactionModal action="update" transactionInfo={transactionInfo} />
              <DeleteTransactionModal transactionId={transaction.id} />
            </Button.Group>
          </Grid.Column>

        </Grid.Row>
      </Grid>
    );
  }
});
