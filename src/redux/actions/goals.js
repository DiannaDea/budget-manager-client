import {
  GET_GOALS_REQUEST,
  GET_GOALS_SUCCESS,
  GET_GOALS_ERROR,
} from './types';

export const getGoalsRequest = (payload = {}) => ({
  type: GET_GOALS_REQUEST,
  payload,
});

export const getGoalsSuccess = (payload = {}) => ({
  type: GET_GOALS_SUCCESS,
  payload,
});

export const getGoalsError = (payload = {}) => ({
  type: GET_GOALS_ERROR,
  payload,
});
