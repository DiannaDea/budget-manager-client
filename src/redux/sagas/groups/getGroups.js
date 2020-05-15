import { put, call } from 'redux-saga/effects';
import { getGroupsSuccess, getGroupsError } from '../../actions/groups';
import requestAPI from '../../../utils/requestAPI';

export default function* getGroups() {
  try {
    const response = yield call(requestAPI, {
      url: '/cards-service/api/test/groups',
      method: 'GET',
    });

    const {
      data: groups,
    } = response;

    yield put(getGroupsSuccess(groups));
  } catch (error) {
    yield put(getGroupsError(error));
  }
}
