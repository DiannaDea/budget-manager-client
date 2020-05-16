/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import {
  Grid, Header, Image,
} from 'semantic-ui-react';
import TransactionsFilter from '../../components/TransactionsFilter';

export default class Transactions extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            <Header as="h2">Transactions</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column floated="left" width={9}>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Grid.Column>
          <Grid.Column floated="right" width={4}>
            <TransactionsFilter />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
