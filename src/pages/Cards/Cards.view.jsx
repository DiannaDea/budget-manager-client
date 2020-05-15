/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import CardItem from '../../components/CardItem';

export default class CardsView extends Component {
  render() {
    const { cards } = this.props;

    return (
      <Grid>
        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            <Header as="h2">Cards</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3} centered>
          {
          cards.map((card, id) => (
            <Grid.Column key={id}>
              <CardItem card={card} />
            </Grid.Column>
          ))
        }
        </Grid.Row>
      </Grid>
    );
  }
}
