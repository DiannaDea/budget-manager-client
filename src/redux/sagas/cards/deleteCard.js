import { put, call } from 'redux-saga/effects';
import { deleteCardSuccess, deleteCardError } from '../../actions/cards';
import requestAPI from '../../../utils/requestAPI';

export default function* deleteCard({ payload }) {
  const { cardId, bankId } = payload;

  try {
    const response = yield call(requestAPI, {
      url: `/cards-service/api/cards/${cardId}`,
      method: 'DELETE',
    });

    const {
      data: deleteStatus,
    } = response;

    yield put(deleteCardSuccess({
      cardId,
      bankId,
      ...deleteStatus,
    }));
  } catch (error) {
    yield put(deleteCardError(error));
  }
}
