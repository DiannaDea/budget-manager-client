import { takeEvery } from 'redux-saga/effects';
import { GET_FILTERS_REQUEST, GET_TRANSACTIONS_REQUEST } from '../../actions/types';
import getFiltersSaga from './getFilters';
import getTransactionsSaga from './getTransactions';

export default function* banks() {
  yield takeEvery(GET_FILTERS_REQUEST, getFiltersSaga);
  yield takeEvery(GET_TRANSACTIONS_REQUEST, getTransactionsSaga);
}
