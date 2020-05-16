import { connect } from 'react-redux';
import TransactionsFilter from './TransactionsFilter';
import { getFiltersRequest, getTransactionsRequest } from '../../redux/actions/transactions';

const mapStateToProps = (state) => {
  const {
    groups: {
      data: groups,
    },
    filters: {
      data: filters,
    },
  } = state;

  return {
    groups,
    filters,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getFilters: (payload) => dispatch(getFiltersRequest(payload)),
  getTransactions: (payload) => dispatch(getTransactionsRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsFilter);
