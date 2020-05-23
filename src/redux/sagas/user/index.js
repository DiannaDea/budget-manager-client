import { takeEvery } from 'redux-saga/effects';
import {
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  VERIFY_CODE_REQUEST,
} from '../../actions/types';
import signIn from './signIn';
import signUp from './signUp';
import verifyCode from './verifyCode';

export default function* banks() {
  yield takeEvery(SIGN_IN_REQUEST, signIn);
  yield takeEvery(SIGN_UP_REQUEST, signUp);
  yield takeEvery(VERIFY_CODE_REQUEST, verifyCode);
}
