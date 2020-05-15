import { takeEvery } from 'redux-saga/effects';
import {
  AUTH_CARD_REQUEST, SAVE_CARD_REQUEST, DELETE_CARD_REQUEST, UPDATE_CARD_REQUEST,
} from '../../actions/types';
import authCard from './authCard';
import saveCard from './saveCard';
import deleteCard from './deleteCard';
import updateCard from './updateCard';

export default function* banks() {
  yield takeEvery(AUTH_CARD_REQUEST, authCard);
  yield takeEvery(SAVE_CARD_REQUEST, saveCard);
  yield takeEvery(DELETE_CARD_REQUEST, deleteCard);
  yield takeEvery(UPDATE_CARD_REQUEST, updateCard);
}
