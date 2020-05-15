/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardsView from './Cards.view';
import { getBanksRequest } from '../../redux/actions/banks';

class CardsContainer extends Component {
  componentDidMount() {
    const { banks, getBanks } = this.props;

    if (!banks.length) {
      getBanks({ groupIds: '1,2' });
    }
  }

  getCards = () => {
    const { banks, match: { params: { id: bankId } } } = this.props;

    const bank = banks.find((b) => b.bank.id === parseInt(bankId, 10));
    return (bank) ? bank.cards : [];
  }

  goBackToBanksPage = () => {
    const { history } = this.props;
    history.push('/banks');
  }

  render() {
    const cards = this.getCards();
    return (
      <CardsView cards={cards} goBackToBanksPage={this.goBackToBanksPage} />
    );
  }
}

const mapStateToProps = (state) => {
  const {
    banks: {
      data: banks,
    },
  } = state;

  return {
    banks,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getBanks: (payload) => dispatch(getBanksRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
