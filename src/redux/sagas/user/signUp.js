import { put, call } from 'redux-saga/effects';
import { signUpSuccess, signUpError } from '../../actions/user';
import requestAPI from '../../../utils/requestAPI';

export default function* signUp({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: '/api/users-service/auth/signup',
      method: 'POST',
      data: payload,
      port: '7000',
    });

    const {
      data: authInfo,
    } = response;

    yield put(signUpSuccess(authInfo));
  } catch (error) {
    yield put(signUpError(error));
  }
}
