import { put, call } from 'redux-saga/effects';
import querystring from 'querystring';
import { getBanksSuccess, getBanksError } from '../../actions/banks';
import requestAPI from '../../../utils/requestAPI';

export default function* getBanks({ payload }) {
  const queryParams = querystring.stringify(payload);

  try {
    const response = yield call(requestAPI, {
      url: `/cards-service/api/banks?${queryParams}`,
      method: 'GET',
    });

    const {
      data: banks,
    } = response;

    yield put(getBanksSuccess(banks));
  } catch (error) {
    yield put(getBanksError(error));
  }
}
