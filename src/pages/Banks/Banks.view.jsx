/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Grid, Header, Message } from 'semantic-ui-react';
import BankCard from '../../components/BankCard';
import ConnectCardModal from '../../components/ConnectCardModal';

export default class BanksView extends Component {
  render() {
    const { banks, viewCards, deleteBank } = this.props;

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
            (!banks.length)
              ? (
                <Message
                  header="Ooops... No banks connected yet!"
                />
              )
              : null
          }
          {
          banks.map((bank) => ((bank.bank.internalName !== 'custom')
            ? (
              <Grid.Column key={bank.bank.id}>
                <BankCard bank={bank} viewCards={viewCards} deleteBank={deleteBank} />
              </Grid.Column>
            )
            : null))
        }
        </Grid.Row>
      </Grid>
    );
  }
}
