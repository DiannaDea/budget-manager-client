import { put, call } from 'redux-saga/effects';
import { createGoalSuccess, createGoalError } from '../../actions/goals';
import requestAPI from '../../../utils/requestAPI';

export default function* createGoal({ payload }) {
  const { goalId } = payload;
  try {
    yield call(requestAPI, {
      url: `/api/users-service/goals/${goalId}`,
      data: payload,
      method: 'DELETE',
      port: '7000',
    });

    yield put(createGoalSuccess({ goalId }));
  } catch (error) {
    yield put(createGoalError(error));
  }
}
