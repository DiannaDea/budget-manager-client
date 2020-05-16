import { put, call } from 'redux-saga/effects';
import { getTransactionsSuccess, getTransactionsError } from '../../actions/transactions';
import requestAPI from '../../../utils/requestAPI';

export default function* getTransactions() {
  try {
    const response = yield call(requestAPI, {
      url: '/cards-service/api/transactions',
      method: 'GET',
    });

    const {
      data: transactions,
    } = response;

    yield put(getTransactionsSuccess(transactions));
  } catch (error) {
    yield put(getTransactionsError(error));
  }
}
