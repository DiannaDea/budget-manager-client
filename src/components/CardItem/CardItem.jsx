/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { DateTime } from 'luxon';
import { chunk } from 'lodash';
import {
  Card, Button, Grid, Image, Icon,
} from 'semantic-ui-react';
import CardRow from '../CardRow';

class CardItem extends React.Component {
  getCard = (cardNumber) => {
    if (!cardNumber) {
      return '';
    }

    const arr = cardNumber.split('');
    const chunks = chunk(arr, 4);
    return chunks.reduce((res, ch) => res.concat(` ${ch.join('')}`), '');
  }

  getConnectedDate = (date) => DateTime
    .fromISO(date)
    .toFormat('dd.MM.yyyy')

  render() {
    const { card } = this.props;

    return (
      <Card>
        <Card.Content>
          <Image
            as={Icon}
            name="credit card outline"
            floated="left"
            size="big"
            circular
            color="grey"
            inverted
          />
          <Card.Header>{ this.getCard(card.cardNumber) }</Card.Header>
          <Card.Meta>{ this.getConnectedDate(card.createdAt) }</Card.Meta>
        </Card.Content>
        <Card.Content>
          <CardRow leftText="Balance" rightText={`${card.balance} ${card.currency}`} />
          <CardRow leftText="Credit limit" rightText={`${card.limit} ${card.currency}`} />
        </Card.Content>
        <Card.Content>
          {
            (card.clientName)
              ? <CardRow leftText="Owner" rightText={card.clientName} />
              : null
          }
          <CardRow leftText="Group" rightText="Family" />
        </Card.Content>
        <Card.Content>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Button fluid color="blue">Edit</Button>
              </Grid.Column>
              <Grid.Column>
                <Button fluid color="red">Delete</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

export default CardItem;