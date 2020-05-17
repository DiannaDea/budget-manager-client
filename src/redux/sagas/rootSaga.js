import { fork } from 'redux-saga/effects';
import banks from './banks';
import cards from './cards';
import groups from './groups';
import transactions from './transactions';
import categories from './categories';

export default function* rootSaga() {
  yield fork(banks);
  yield fork(cards);
  yield fork(groups);
  yield fork(transactions);
  yield fork(categories);
}
