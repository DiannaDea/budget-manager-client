import { takeEvery } from 'redux-saga/effects';
import { GET_BANKS_REQUEST, DELETE_BANK_REQUEST } from '../../actions/types';
import getBanksSaga from './getBanks';
import deleteBankSaga from './deleteBank';

export default function* banks() {
  yield takeEvery(GET_BANKS_REQUEST, getBanksSaga);
  yield takeEvery(DELETE_BANK_REQUEST, deleteBankSaga);
}
