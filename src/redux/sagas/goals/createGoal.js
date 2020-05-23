import { put, call } from 'redux-saga/effects';
import { createGoalSuccess, createGoalError } from '../../actions/goals';
import requestAPI from '../../../utils/requestAPI';

export default function* createGoal({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: '/api/users-service/goals',
      data: payload,
      method: 'POST',
      port: '7000',
    });

    const {
      data: newGoal,
    } = response;

    yield put(createGoalSuccess(newGoal));
  } catch (error) {
    yield put(createGoalError(error));
  }
}
