/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Grid, Header, Button, Icon, Message,
} from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import CardItem from '../../components/CardItem';

export default withTranslation()(class CardsView extends Component {
  render() {
    const { cards, goBackToBanksPage, t } = this.props;

    return (
      <Grid>
        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            <Button floated="left" onClick={goBackToBanksPage}>
              <Icon name="angle left" />
              {t('btnBack')}
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            <Header as="h2">{t('cardsTab')}</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3} centered>
          {
            (!cards.length)
              ? (
                <Message
                  header={t('messageNoCards')}
                />
              )
              : null
          }
          {
          cards.map((card) => (
            <Grid.Column key={card.id}>
              <CardItem card={card} {...this.props} />
            </Grid.Column>
          ))
        }
        </Grid.Row>
      </Grid>
    );
  }
});
