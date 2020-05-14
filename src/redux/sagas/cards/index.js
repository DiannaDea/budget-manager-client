import { takeEvery } from 'redux-saga/effects';
import { AUTH_CARD_REQUEST, SAVE_CARD_REQUEST } from '../../actions/types';
import authCard from './authCard';
import saveCard from './saveCard';

export default function* banks() {
  yield takeEvery(AUTH_CARD_REQUEST, authCard);
  yield takeEvery(SAVE_CARD_REQUEST, saveCard);
}
