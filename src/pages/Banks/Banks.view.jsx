/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Grid, Header, Message } from 'semantic-ui-react';
import { withTranslation } from 'react-i18next';
import BankCard from '../../components/BankCard';
import ConnectCardModal from '../../components/ConnectCardModal';

class BanksView extends Component {
  render() {
    const {
      banks, viewCards, deleteBank, t,
    } = this.props;

    return (
      <Grid>
        <Grid.Row columns={1} textAlign="center">
          <Grid.Column>
            <Header as="h2">{t('banksTab')}</Header>
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
                  header={t('messageNoBanks')}
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

export default withTranslation()(BanksView);
