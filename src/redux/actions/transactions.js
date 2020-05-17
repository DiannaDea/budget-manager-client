import {
  GET_FILTERS_REQUEST,
  GET_FILTERS_SUCCESS,
  GET_FILTERS_ERROR,
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_ERROR,
  SAVE_TRANSACTION_REQUEST,
  SAVE_TRANSACTION_SUCCESS,
  SAVE_TRANSACTION_ERROR,
  RESET_SAVED_TRANSACTION,
} from './types';

export const getFiltersRequest = (payload = {}) => ({
  type: GET_FILTERS_REQUEST,
  payload,
});

export const getFiltersSuccess = (payload = {}) => ({
  type: GET_FILTERS_SUCCESS,
  payload,
});

export const getFiltersError = (payload = {}) => ({
  type: GET_FILTERS_ERROR,
  payload,
});

export const getTransactionsRequest = (payload = {}) => ({
  type: GET_TRANSACTIONS_REQUEST,
  payload,
});

export const getTransactionsSuccess = (payload = {}) => ({
  type: GET_TRANSACTIONS_SUCCESS,
  payload,
});

export const getTransactionsError = (payload = {}) => ({
  type: GET_TRANSACTIONS_ERROR,
  payload,
});

export const saveTransactionRequest = (payload = {}) => ({
  type: SAVE_TRANSACTION_REQUEST,
  payload,
});

export const saveTransactionSuccess = (payload = {}) => ({
  type: SAVE_TRANSACTION_SUCCESS,
  payload,
});

export const saveTransactionError = (payload = {}) => ({
  type: SAVE_TRANSACTION_ERROR,
  payload,
});

export const resetSavedTransaction = (payload = {}) => ({
  type: RESET_SAVED_TRANSACTION,
  payload,
});
