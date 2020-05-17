import { connect } from 'react-redux';
import { getTransactionsRequest } from '../../redux/actions/transactions';
import TransactionsList from './TransactionsList';

const mapStateToProps = (state) => {
  const {
    filters: {
      data: filters,
    },
    groups: {
      data: groups,
    },
    transactions: {
      data: transactions,
    },
  } = state;

  return {
    filters,
    groups,
    transactions,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getTransactions: (payload) => dispatch(getTransactionsRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
