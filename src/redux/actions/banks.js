import {
  GET_BANKS_REQUEST,
  GET_BANKS_SUCCESS,
  GET_BANKS_ERROR,
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
