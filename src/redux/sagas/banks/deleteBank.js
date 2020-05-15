import { put, call } from 'redux-saga/effects';
import { deleteBankSuccess, deleteBankError } from '../../actions/banks';
import requestAPI from '../../../utils/requestAPI';

export default function* deleteBank({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(requestAPI, {
      url: `/cards-service/api/banks/${id}`,
      method: 'DELETE',
    });

    const {
      data: deleteStatus,
    } = response;

    yield put(deleteBankSuccess(deleteStatus));
  } catch (error) {
    yield put(deleteBankError(error));
  }
}
