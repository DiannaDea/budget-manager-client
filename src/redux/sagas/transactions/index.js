import { takeEvery } from 'redux-saga/effects';
import {
  GET_FILTERS_REQUEST, GET_TRANSACTIONS_REQUEST, SAVE_TRANSACTION_REQUEST,
} from '../../actions/types';
import getFiltersSaga from './getFilters';
import getTransactionsSaga from './getTransactions';
import saveTransactionSaga from './saveTransaction';

export default function* banks() {
  yield takeEvery(GET_FILTERS_REQUEST, getFiltersSaga);
  yield takeEvery(GET_TRANSACTIONS_REQUEST, getTransactionsSaga);
  yield takeEvery(SAVE_TRANSACTION_REQUEST, saveTransactionSaga);
}
