import { put, call } from 'redux-saga/effects';
import { getCategoriesSuccess, getCategoriesError } from '../../actions/categories';
import requestAPI from '../../../utils/requestAPI';

export default function* getCategories() {
  try {
    const response = yield call(requestAPI, {
      url: '/cards-service/api/categories',
      method: 'GET',
    });

    const {
      data: categories,
    } = response;

    yield put(getCategoriesSuccess(categories));
  } catch (error) {
    yield put(getCategoriesError(error));
  }
}
