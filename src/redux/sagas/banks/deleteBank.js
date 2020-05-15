import { put, call } from 'redux-saga/effects';
import { deleteBankSuccess, deleteBankError } from '../../actions/banks';
import requestAPI from '../../../utils/requestAPI';

export default function* deleteBank({ payload }) {
  const { bankId } = payload;

  try {
    const response = yield call(requestAPI, {
      url: `/cards-service/api/banks/${bankId}`,
      method: 'DELETE',
    });

    const {
      data: deleteStatus,
    } = response;

    yield put(deleteBankSuccess({
      bankId,
      ...deleteStatus,
    }));
  } catch (error) {
    yield put(deleteBankError(error));
  }
}
