import React, { Component } from 'react';
import { connect } from 'react-redux';
import BanksView from './Banks.view';
import { getBanksRequest, deleteBankRequest } from '../../redux/actions/banks';

class BanksContainer extends Component {
  componentDidMount() {
    const { getBanks, groups } = this.props;

    if (groups.length) {
      const groupIds = groups.map((group) => group.id).join(',');
      getBanks({ groupIds });
    }
  }

  componentDidUpdate(prevProps) {
    const { getBanks, newCardAdded, groups } = this.props;

    if (prevProps.groups.length !== groups.length) {
      const groupIds = groups.map((group) => group.id).join(',');
      getBanks({ groupIds });
    }

    if (prevProps.newCardAdded !== newCardAdded && newCardAdded && groups.length) {
      const groupIds = groups.map((group) => group.id).join(',');
      getBanks({ groupIds });
    }
  }

  viewCards = (bankId) => {
    const { history } = this.props;
    history.push(`/manager/banks/${bankId}/cards`);
  }

  render() {
    const { banks, deleteBank } = this.props;

    return (
      <BanksView banks={banks} viewCards={this.viewCards} deleteBank={deleteBank} />
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
    groups: {
      data: groups,
    },
  } = state;

  return {
    banks,
    newCardAdded,
    groups,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getBanks: (payload) => dispatch(getBanksRequest(payload)),
  deleteBank: (payload) => dispatch(deleteBankRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BanksContainer);
