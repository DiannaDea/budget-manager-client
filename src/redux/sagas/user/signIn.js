import { put, call } from 'redux-saga/effects';
import { signInSuccess, signInError } from '../../actions/user';
import requestAPI from '../../../utils/requestAPI';

export default function* signIn({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: '/api/users-service/auth/signin',
      method: 'POST',
      data: payload,
      port: '7000',
    });

    const {
      data: authInfo,
    } = response;

    yield put(signInSuccess(authInfo));
  } catch (error) {
    yield put(signInError(error));
  }
}
