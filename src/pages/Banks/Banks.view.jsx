/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import BankCard from '../../components/BankCard';
import ConnectCardModal from '../../components/ConnectCardModal';

export default class BanksView extends Component {
  render() {
    const { banks } = this.props;

    return (
      <Grid>
        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            <Header as="h2">Banks</Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            <ConnectCardModal />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3} centered>
          {
          banks.map((bank, id) => (
            <Grid.Column key={id}>
              <BankCard bank={bank} />
            </Grid.Column>
          ))
        }
        </Grid.Row>
      </Grid>
    );
  }
}
