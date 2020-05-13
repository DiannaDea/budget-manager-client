import { fork } from 'redux-saga/effects';
import banks from './banks';

export default function* rootSaga() {
  yield fork(banks);
}
