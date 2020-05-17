import { connect } from 'react-redux';
import { saveTransactionRequest, resetSavedTransaction, updateTransactionRequest } from '../../redux/actions/transactions';
import CreateTransactionModal from './CreateModal';

const mapStateToProps = (state) => {
  const {
    transactions: {
      transactionsChanged,
    },
  } = state;

  return {
    transactionsChanged,
  };
};

const mapDispatchToProps = (dispatch) => ({
  saveTransaction: (payload) => dispatch(saveTransactionRequest(payload)),
  updateTransaction: (payload) => dispatch(updateTransactionRequest(payload)),
  resetSavedTransaction: (payload) => dispatch(resetSavedTransaction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTransactionModal);
