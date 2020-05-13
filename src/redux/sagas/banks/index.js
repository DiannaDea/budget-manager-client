import { takeEvery } from 'redux-saga/effects';
import { GET_BANKS_REQUEST } from '../../actions/types';
import getBanksSaga from './getBanks';

export default function* banks() {
  yield takeEvery(GET_BANKS_REQUEST, getBanksSaga);
}
