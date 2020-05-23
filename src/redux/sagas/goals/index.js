import { takeEvery } from 'redux-saga/effects';
import { GET_GOALS_REQUEST, CREATE_GOAL_REQUEST, DELETE_GOAL_REQUEST } from '../../actions/types';
import getGoals from './getGoals';
import createGoal from './createGoal';
import deleteGoal from './deleteGoal';

export default function* goals() {
  yield takeEvery(GET_GOALS_REQUEST, getGoals);
  yield takeEvery(CREATE_GOAL_REQUEST, createGoal);
  yield takeEvery(DELETE_GOAL_REQUEST, deleteGoal);
}
