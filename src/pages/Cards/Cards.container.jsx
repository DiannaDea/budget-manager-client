/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardsView from './Cards.view';
import { getBanksRequest } from '../../redux/actions/banks';
import { updateCardRequest, deleteCardRequest } from '../../redux/actions/cards';

class CardsContainer extends Component {
  componentDidUpdate(prevProps) {
    const { getBanks, groups } = this.props;

    if (prevProps.groups.length !== groups.length) {
      const groupIds = groups.map((group) => group.id).join(',');
      getBanks({ groupIds });
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
      <CardsView
        cards={cards}
        goBackToBanksPage={this.goBackToBanksPage}
        handleGroupSelect={this.handleGroupSelect}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const {
    banks: {
      data: banks,
    },
    groups: {
      data: groups,
    },
  } = state;

  return {
    banks,
    groups,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getBanks: (payload) => dispatch(getBanksRequest(payload)),
  updateCard: (payload) => dispatch(updateCardRequest(payload)),
  deleteCard: (payload) => dispatch(deleteCardRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
