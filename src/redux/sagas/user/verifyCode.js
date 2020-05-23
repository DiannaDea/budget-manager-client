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
      data: {
        accessToken,
        refreshToken,
        user,
      },
    } = response;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('userId', user.id);

    yield put(verifyCodeSuccess({ tokens: { accessToken, refreshToken }, user }));
  } catch (error) {
    yield put(verifyCodeError('Invalid verification code'));
  }
}
