import {
  GET_BANKS_REQUEST,
  GET_BANKS_SUCCESS,
  GET_BANKS_ERROR,
  DELETE_BANK_REQUEST,
  DELETE_BANK_SUCCESS,
  DELETE_BANK_ERROR,
} from './types';

export const getBanksRequest = (payload = {}) => ({
  type: GET_BANKS_REQUEST,
  payload,
});

export const getBanksSuccess = (payload = {}) => ({
  type: GET_BANKS_SUCCESS,
  payload,
});

export const getBanksError = (payload = {}) => ({
  type: GET_BANKS_ERROR,
  payload,
});

export const deleteBankRequest = (payload = {}) => ({
  type: DELETE_BANK_REQUEST,
  payload,
});

export const deleteBankSuccess = (payload = {}) => ({
  type: DELETE_BANK_SUCCESS,
  payload,
});

export const deleteBankError = (payload = {}) => ({
  type: DELETE_BANK_ERROR,
  payload,
});
