import { takeEvery } from 'redux-saga/effects';
import { GET_GOALS_REQUEST } from '../../actions/types';
import getGoals from './getGoals';

export default function* goals() {
  yield takeEvery(GET_GOALS_REQUEST, getGoals);
}
