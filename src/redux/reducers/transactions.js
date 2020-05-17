import initialState from '../store/initialState';
import {
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_ERROR,
  SAVE_TRANSACTION_REQUEST,
  SAVE_TRANSACTION_SUCCESS,
  SAVE_TRANSACTION_ERROR,
  RESET_SAVED_TRANSACTION,
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
    [SAVE_TRANSACTION_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [SAVE_TRANSACTION_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      newTransactionAdded: true,
    }),
    [SAVE_TRANSACTION_ERROR]: () => ({
      ...state,
      isFetching: false,
      newTransactionAdded: false,
    }),
    [RESET_SAVED_TRANSACTION]: () => ({
      ...state,
      isFetching: false,
      newTransactionAdded: false,
    }),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
