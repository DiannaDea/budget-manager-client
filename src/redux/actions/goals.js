import {
  GET_GOALS_REQUEST,
  GET_GOALS_SUCCESS,
  GET_GOALS_ERROR,
  CREATE_GOAL_REQUEST,
  CREATE_GOAL_SUCCESS,
  CREATE_GOAL_ERROR,
  DELETE_GOAL_REQUEST,
  DELETE_GOAL_SUCCESS,
  DELETE_GOAL_ERROR,
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

export const createGoalRequest = (payload = {}) => ({
  type: CREATE_GOAL_REQUEST,
  payload,
});

export const createGoalSuccess = (payload = {}) => ({
  type: CREATE_GOAL_SUCCESS,
  payload,
});

export const createGoalError = (payload = {}) => ({
  type: CREATE_GOAL_ERROR,
  payload,
});

export const deleteGoalRequest = (payload = {}) => ({
  type: DELETE_GOAL_REQUEST,
  payload,
});

export const deleteGoalSuccess = (payload = {}) => ({
  type: DELETE_GOAL_SUCCESS,
  payload,
});

export const deleteGoalError = (payload = {}) => ({
  type: DELETE_GOAL_ERROR,
  payload,
});
