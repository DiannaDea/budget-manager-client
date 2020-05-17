import { put, call } from 'redux-saga/effects';
import { saveTransactionSuccess, saveTransactionError } from '../../actions/transactions';
import requestAPI from '../../../utils/requestAPI';

export default function* saveTransaction({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: '/cards-service/api/transactions',
      method: 'POST',
      data: payload,
    });

    const {
      data: transaction,
    } = response;

    yield put(saveTransactionSuccess(transaction));
  } catch (error) {
    yield put(saveTransactionError(error));
  }
}
