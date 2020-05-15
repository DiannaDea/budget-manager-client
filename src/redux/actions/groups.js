import {
  GET_GROUPS_REQUEST,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_ERROR,
} from './types';

export const getGroupsRequest = (payload = {}) => ({
  type: GET_GROUPS_REQUEST,
  payload,
});

export const getGroupsSuccess = (payload = {}) => ({
  type: GET_GROUPS_SUCCESS,
  payload,
});

export const getGroupsError = (payload = {}) => ({
  type: GET_GROUPS_ERROR,
  payload,
});
