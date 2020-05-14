import { fork } from 'redux-saga/effects';
import banks from './banks';
import cards from './cards';

export default function* rootSaga() {
  yield fork(banks);
  yield fork(cards);
}
