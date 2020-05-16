import { put, call } from 'redux-saga/effects';
import { getFiltersSuccess, getFiltersError } from '../../actions/transactions';
import requestAPI from '../../../utils/requestAPI';

export default function* getFilters() {
  try {
    const response = yield call(requestAPI, {
      url: '/cards-service/api/transactions/filters',
      method: 'GET',
    });

    const {
      data: filters,
    } = response;

    yield put(getFiltersSuccess(filters));
  } catch (error) {
    yield put(getFiltersError(error));
  }
}
