import {
  AUTH_CARD_REQUEST,
  AUTH_CARD_SUCCESS,
  AUTH_CARD_ERROR,
  SAVE_CARD_REQUEST,
  SAVE_CARD_SUCCESS,
  SAVE_CARD_ERROR,
  RESET_AUTHED_CARD,
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
