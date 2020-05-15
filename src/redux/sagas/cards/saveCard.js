import { put, call } from 'redux-saga/effects';
import { saveCardSuccess, saveCardError } from '../../actions/cards';
import requestAPI from '../../../utils/requestAPI';

export default function* saveCard({ payload }) {
  try {
    const response = yield call(requestAPI, {
      url: '/cards-service/api/cards',
      method: 'POST',
      data: payload,
    });

    const {
      data: cardInfo,
    } = response;

    yield put(saveCardSuccess(cardInfo));
  } catch (error) {
    yield put(saveCardError(error));
  }
}
