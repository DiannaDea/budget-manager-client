import {
  GET_FILTERS_REQUEST,
  GET_FILTERS_SUCCESS,
  GET_FILTERS_ERROR,
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_ERROR,
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
