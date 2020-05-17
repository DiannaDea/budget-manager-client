import { connect } from 'react-redux';
import { getTransactionsRequest, resetSavedTransaction } from '../../redux/actions/transactions';
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
      newTransactionAdded,
      data: transactions,
    },
  } = state;

  return {
    newTransactionAdded,
    filters,
    groups,
    transactions,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getTransactions: (payload) => dispatch(getTransactionsRequest(payload)),
  resetSavedTransaction: (payload) => dispatch(resetSavedTransaction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList);
