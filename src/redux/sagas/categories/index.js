import { takeEvery } from 'redux-saga/effects';
import { GET_CATEGORIES_REQUEST } from '../../actions/types';
import getCategoriesSaga from './getCategories';

export default function* banks() {
  yield takeEvery(GET_CATEGORIES_REQUEST, getCategoriesSaga);
}
