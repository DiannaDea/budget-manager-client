import React, { Component } from 'react';
import { connect } from 'react-redux';
import BanksView from './Banks.view';
import { getBanksRequest } from '../../redux/actions/banks';

class BanksContainer extends Component {
  componentDidMount() {
    const { getBanks } = this.props;
    getBanks({ groupIds: '1,2' });
  }

  componentDidUpdate(prevProps) {
    const { getBanks, newCardAdded } = this.props;

    if (prevProps.newCardAdded !== newCardAdded && newCardAdded) {
      getBanks({ groupIds: '1,2' });
    }
  }

  viewCards = (bankId) => {
    const { history } = this.props;
    history.push(`/banks/${bankId}/cards`);
  }

  render() {
    const { banks } = this.props;

    return (
      <BanksView banks={banks} viewCards={this.viewCards} />
    );
  }
}

const mapStateToProps = (state) => {
  const {
    banks: {
      data: banks,
    },
    cards: {
      newCardAdded,
    },
  } = state;

  return {
    banks,
    newCardAdded,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getBanks: (payload) => dispatch(getBanksRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BanksContainer);
