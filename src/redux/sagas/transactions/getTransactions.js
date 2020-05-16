import { put, call } from 'redux-saga/effects';
import querystring from 'querystring';
import { getTransactionsSuccess, getTransactionsError } from '../../actions/transactions';
import requestAPI from '../../../utils/requestAPI';

export default function* getTransactions({ payload }) {
  const queryParams = querystring.stringify(payload);

  try {
    const response = yield call(requestAPI, {
      url: `/cards-service/api/transactions?${queryParams}`,
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
