import { put, call } from 'redux-saga/effects';
import querystring from 'querystring';
import { getGroupsSuccess, getGroupsError } from '../../actions/groups';
import requestAPI from '../../../utils/requestAPI';

export default function* getGroups({ payload }) {
  const queryParams = querystring.stringify(payload);

  try {
    const response = yield call(requestAPI, {
      url: `/api/users-service/groups?${queryParams}`,
      method: 'GET',
      port: '7000',
    });

    const {
      data: groups,
    } = response;

    yield put(getGroupsSuccess(groups));
  } catch (error) {
    yield put(getGroupsError(error));
  }
}
