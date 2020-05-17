import { connect } from 'react-redux';
import Transactions from './Transactions';

const mapStateToProps = (state) => {
  const {
    transactions: {
      data: transactions,
    },
  } = state;

  return {
    transactions,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
