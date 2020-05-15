import { put, call } from 'redux-saga/effects';
import { updateCardSuccess, updateCardError } from '../../actions/cards';
import requestAPI from '../../../utils/requestAPI';

export default function* updateCard({ payload }) {
  const { cardId, bankId, ...updateFields } = payload;

  try {
    const response = yield call(requestAPI, {
      url: `/cards-service/api/cards/${cardId}`,
      method: 'PUT',
      data: updateFields,
    });

    const {
      data: updateStatus,
    } = response;

    yield put(updateCardSuccess({
      cardId,
      bankId,
      updateFields,
      ...updateStatus,
    }));
  } catch (error) {
    yield put(updateCardError(error));
  }
}
