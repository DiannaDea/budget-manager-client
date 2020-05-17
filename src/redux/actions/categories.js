import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_ERROR,
  GET_CATEGORIES_SUCCESS,
} from './types';

export const getCategoriesRequest = (payload = {}) => ({
  type: GET_CATEGORIES_REQUEST,
  payload,
});

export const getCategoriesSuccess = (payload = {}) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload,
});

export const getCategoriesError = (payload = {}) => ({
  type: GET_CATEGORIES_ERROR,
  payload,
});
