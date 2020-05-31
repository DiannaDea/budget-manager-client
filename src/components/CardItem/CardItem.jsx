/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { DateTime } from 'luxon';
import { chunk } from 'lodash';
import {
  Card, Grid, Image, Icon,
} from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import CardRow from '../CardRow';
import UpdateCardModal from '../UpdateCardModal';
import DeleteCardModal from '../DeleteCardModal';

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
    const { card, t } = this.props;
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
          <CardRow leftText={t('cardItemBalance')} rightText={`${card.balance} ${card.currency}`} />
          <CardRow leftText={t('cardItemCreditLimit')} rightText={`${card.limit} ${card.currency}`} />
        </Card.Content>
        <Card.Content>
          {
            (card.clientName)
              ? <CardRow leftText={t('cardItemOwner')} rightText={card.clientName} />
              : null
          }
          <CardRow leftText={t('cardItemGroup')} rightText={card.group.name} />
        </Card.Content>
        <Card.Content>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <UpdateCardModal {...this.props} />
              </Grid.Column>
              <Grid.Column>
                <DeleteCardModal {...this.props}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

export default withTranslation()(CardItem);
