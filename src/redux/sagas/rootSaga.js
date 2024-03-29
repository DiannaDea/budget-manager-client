import { fork } from 'redux-saga/effects';
import banks from './banks';
import cards from './cards';
import groups from './groups';
import transactions from './transactions';
import categories from './categories';
import user from './user';
import goals from './goals';

export default function* rootSaga() {
  yield fork(banks);
  yield fork(cards);
  yield fork(groups);
  yield fork(transactions);
  yield fork(categories);
  yield fork(user);
  yield fork(goals);
}
