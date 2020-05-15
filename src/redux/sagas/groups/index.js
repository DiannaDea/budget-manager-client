import { takeEvery } from 'redux-saga/effects';
import { GET_GROUPS_REQUEST } from '../../actions/types';
import getGroupsSaga from './getGroups';

export default function* banks() {
  yield takeEvery(GET_GROUPS_REQUEST, getGroupsSaga);
}
