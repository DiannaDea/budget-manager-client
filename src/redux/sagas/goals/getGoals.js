import { put, call } from 'redux-saga/effects';
import querystring from 'querystring';
import { getGoalsSuccess, getGoalsError } from '../../actions/goals';
import requestAPI from '../../../utils/requestAPI';

export default function* getGoals({ payload }) {
  const queryParams = querystring.stringify(payload);

  try {
    const response = yield call(requestAPI, {
      url: `/api/users-service/goals?${queryParams}`,
      method: 'GET',
      port: '7000',
    });

    const {
      data: goals,
    } = response;

    yield put(getGoalsSuccess(goals));
  } catch (error) {
    yield put(getGoalsError(error));
  }
}
