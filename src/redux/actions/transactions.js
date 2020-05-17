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
  UPDATE_TRANSACTION_REQUEST,
  UPDATE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_ERROR,
  DELETE_TRANSACTION_REQUEST,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_ERROR,
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

export const updateTransactionRequest = (payload = {}) => ({
  type: UPDATE_TRANSACTION_REQUEST,
  payload,
});

export const updateTransactionSuccess = (payload = {}) => ({
  type: UPDATE_TRANSACTION_SUCCESS,
  payload,
});

export const updateTransactionError = (payload = {}) => ({
  type: UPDATE_TRANSACTION_ERROR,
  payload,
});

export const deleteTransactionRequest = (payload = {}) => ({
  type: DELETE_TRANSACTION_REQUEST,
  payload,
});

export const deleteTransactionSuccess = (payload = {}) => ({
  type: DELETE_TRANSACTION_SUCCESS,
  payload,
});

export const deleteTransactionError = (payload = {}) => ({
  type: DELETE_TRANSACTION_ERROR,
  payload,
});
