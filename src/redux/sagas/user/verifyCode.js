import { put, call } from 'redux-saga/effects';
import { verifyCodeSuccess, verifyCodeError } from '../../actions/user';
import requestAPI from '../../../utils/requestAPI';

export default function* verifyCode({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: '/api/users-service/auth/verify',
      method: 'POST',
      data: payload,
      port: '7000',
    });

    const {
      data: tokens,
    } = response;

    localStorage.setItem('accessToken', tokens.accessToken);
    localStorage.setItem('refreshToken', tokens.refreshToken);

    yield put(verifyCodeSuccess(tokens));
  } catch (error) {
    yield put(verifyCodeError(error));
  }
}
