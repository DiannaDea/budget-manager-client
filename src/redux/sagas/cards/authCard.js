import { put, call } from 'redux-saga/effects';
import { authCardSuccess, authCardError } from '../../actions/cards';
import requestAPI from '../../../utils/requestAPI';

export default function* authCard({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: '/cards-service/api/cards/auth',
      method: 'POST',
      data: payload,
    });

    const {
      data: cardAuth,
    } = response;

    yield put(authCardSuccess(cardAuth));
  } catch (error) {
    yield put(authCardError(error));
  }
}
