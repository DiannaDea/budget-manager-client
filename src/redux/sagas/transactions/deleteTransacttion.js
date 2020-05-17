import { put, call } from 'redux-saga/effects';
import { deleteTransactionSuccess, deleteTransactionError } from '../../actions/transactions';
import requestAPI from '../../../utils/requestAPI';

export default function* deleteTransaction({ payload }) {
  const { transactionId } = payload;

  try {
    const response = yield call(requestAPI, {
      url: `/cards-service/api/transactions/${transactionId}`,
      method: 'DELETE',
    });

    const {
      data: deleteStatus,
    } = response;

    yield put(deleteTransactionSuccess({
      transactionId,
      ...deleteStatus,
    }));
  } catch (error) {
    yield put(deleteTransactionError(error));
  }
}
