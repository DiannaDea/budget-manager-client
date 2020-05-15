import {
  AUTH_CARD_REQUEST,
  AUTH_CARD_SUCCESS,
  AUTH_CARD_ERROR,
  SAVE_CARD_REQUEST,
  SAVE_CARD_SUCCESS,
  SAVE_CARD_ERROR,
  RESET_AUTHED_CARD,
  UPDATE_CARD_REQUEST,
  UPDATE_CARD_SUCCESS,
  UPDATE_CARD_ERROR,
  DELETE_CARD_REQUEST,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_ERROR,
} from './types';

export const authCardRequest = (payload = {}) => ({
  type: AUTH_CARD_REQUEST,
  payload,
});

export const authCardSuccess = (payload = {}) => ({
  type: AUTH_CARD_SUCCESS,
  payload,
});

export const authCardError = (payload = {}) => ({
  type: AUTH_CARD_ERROR,
  payload,
});

export const saveCardRequest = (payload = {}) => ({
  type: SAVE_CARD_REQUEST,
  payload,
});

export const saveCardSuccess = (payload = {}) => ({
  type: SAVE_CARD_SUCCESS,
  payload,
});

export const saveCardError = (payload = {}) => ({
  type: SAVE_CARD_ERROR,
  payload,
});

export const resetAuthedCard = (payload = {}) => ({
  type: RESET_AUTHED_CARD,
  payload,
});

export const deleteCardRequest = (payload = {}) => ({
  type: DELETE_CARD_REQUEST,
  payload,
});

export const deleteCardSuccess = (payload = {}) => ({
  type: DELETE_CARD_SUCCESS,
  payload,
});

export const deleteCardError = (payload = {}) => ({
  type: DELETE_CARD_ERROR,
  payload,
});

export const updateCardRequest = (payload = {}) => ({
  type: UPDATE_CARD_REQUEST,
  payload,
});

export const updateCardSuccess = (payload = {}) => ({
  type: UPDATE_CARD_SUCCESS,
  payload,
});

export const updateCardError = (payload = {}) => ({
  type: UPDATE_CARD_ERROR,
  payload,
});
