import initialState from '../store/initialState';
import {
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_ERROR,
} from '../actions/types';

export default (state = initialState.transactions, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    [GET_TRANSACTIONS_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [GET_TRANSACTIONS_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      data: action.payload,
    }),
    [GET_TRANSACTIONS_ERROR]: () => ({
      ...state,
      isFetching: false,
      data: null,
      error: action.payload,
    }),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
