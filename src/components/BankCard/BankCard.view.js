import React from 'react';
import {
  Card, Button, Grid, Image,
} from 'semantic-ui-react';
import CardRow from '../CardRow';
import DeleteBankModal from '../DeleteBankModal';

import monoImg from '../../assets/monobank.jpeg';
import privatImage from '../../assets/privatbank.jpg';

const mapping = {
  monobank: {
    image: monoImg,
    url: 'https://www.monobank.ua',
  },
  privatbank: {
    image: privatImage,
    url: 'https://www.privat24.ua',
  },
};

class BankCard extends React.Component {
  getBankImage = (bank) => {
    if (!bank) {
      return null;
    }

    return mapping[bank.bank.internalName].image;
  }

  getBankUrl = (bank) => {
    if (!bank) {
      return null;
    }

    return mapping[bank.bank.internalName].url;
  }

  getBankBalance = (bank) => {
    if (!bank) {
      return null;
    }

    const balance = bank.cards.reduce((bal, card) => {
      const res = bal + card.balance;
      return res;
    }, 0);

    return `${balance} UAH`;
  }

  render() {
    const { bank, viewCards, deleteBank } = this.props;

    return (
      <Card>
        <Card.Content>
          <Image
            floated="left"
            size="mini"
            src={this.getBankImage(bank)}
          />
          <Card.Header>{ bank.bank.name }</Card.Header>
          <Card.Meta>{this.getBankUrl(bank)}</Card.Meta>
        </Card.Content>
        <Card.Content>
          <CardRow leftText="Cards count" rightText={bank.cards.length} />
          <CardRow leftText="Balance" rightText={this.getBankBalance(bank)} />
        </Card.Content>
        <Card.Content>
          <CardRow leftText="Last update" rightText="20.12.2020" />
        </Card.Content>
        <Card.Content>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Button fluid color="blue" onClick={() => viewCards(bank.bank.id)}>View Cards</Button>
              </Grid.Column>
              <Grid.Column>
                <DeleteBankModal deleteBank={deleteBank} bank={bank} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

export default BankCard;
