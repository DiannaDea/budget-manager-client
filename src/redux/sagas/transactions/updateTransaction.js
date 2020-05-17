import { put, call } from 'redux-saga/effects';
import { updateTransactionSuccess, updateTransactionError } from '../../actions/transactions';
import requestAPI from '../../../utils/requestAPI';

export default function* updateTransaction({ payload }) {
  const { transactionId, ...updateFields } = payload;

  try {
    const response = yield call(requestAPI, {
      url: `/cards-service/api/transactions/${transactionId}`,
      method: 'PUT',
      data: updateFields,
    });

    const {
      data: updateStatus,
    } = response;

    yield put(updateTransactionSuccess({
      transactionId,
      updateFields,
      ...updateStatus,
    }));
  } catch (error) {
    yield put(updateTransactionError(error));
  }
}
