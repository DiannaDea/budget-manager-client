import { takeEvery } from 'redux-saga/effects';
import {
  GET_FILTERS_REQUEST, GET_TRANSACTIONS_REQUEST, SAVE_TRANSACTION_REQUEST,
  UPDATE_TRANSACTION_REQUEST, DELETE_TRANSACTION_REQUEST,
} from '../../actions/types';
import getFiltersSaga from './getFilters';
import getTransactionsSaga from './getTransactions';
import saveTransactionSaga from './saveTransaction';
import updateTransactionSaga from './updateTransaction';
import deleteTransactionSaga from './deleteTransacttion';

export default function* transactions() {
  yield takeEvery(GET_FILTERS_REQUEST, getFiltersSaga);
  yield takeEvery(GET_TRANSACTIONS_REQUEST, getTransactionsSaga);
  yield takeEvery(SAVE_TRANSACTION_REQUEST, saveTransactionSaga);
  yield takeEvery(UPDATE_TRANSACTION_REQUEST, updateTransactionSaga);
  yield takeEvery(DELETE_TRANSACTION_REQUEST, deleteTransactionSaga);
}
