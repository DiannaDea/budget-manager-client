import React, { Component } from 'react';
import { connect } from 'react-redux';
import BanksView from './Banks.view';
import { getBanksRequest } from '../../redux/actions/banks';

class BanksContainer extends Component {
  componentDidMount() {
    const { getBanks } = this.props;

    getBanks({ groupIds: '1,2' });
  }

  render() {
    const { banks } = this.props;

    return (
      <BanksView banks={banks} />
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

export default connect(mapStateToProps, mapDispatchToProps)(BanksContainer);
