/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardsView from './Cards.view';
import { getBanksRequest } from '../../redux/actions/banks';
import { updateCardRequest, deleteCardRequest } from '../../redux/actions/cards';

const compareCards = (cards1, cards2) => {
  const res = cards1.every((card1, index) => card1.groupId === cards2[index].groupId);
  return !res;
};

const compareBanks = (banks1, banks2) => banks1.every((bank1, index) => {
  const cards1 = bank1.cards;
  const cards2 = banks2[index].cards;
  return compareCards(cards1, cards2);
});

class CardsContainer extends Component {
  componentDidUpdate(prevProps) {
    const { getBanks, groups, banks } = this.props;

    if (prevProps.groups.length !== groups.length) {
      const groupIds = groups.map((group) => group.id).join(',');
      getBanks({ groupIds });
    }

    if (
      banks.length
      && prevProps.banks.length
      && compareBanks(banks, prevProps.banks)
    ) {
      const groupIds = groups.map((group) => group.id).join(',');
      getBanks({ groupIds });
    }
  }

  getCards = () => {
    const { banks, match: { params: { id: bankId } } } = this.props;

    if (!banks.length) {
      return [];
    }

    const bank = banks.find((b) => b.bank.id === bankId);
    return (bank) ? bank.cards : [];
  }

  goBackToBanksPage = () => {
    const { history } = this.props;
    history.push('/manager/banks');
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
