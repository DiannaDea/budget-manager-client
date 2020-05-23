import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  VERIFY_CODE_REQUEST,
  VERIFY_CODE_SUCCESS,
  VERIFY_CODE_ERROR,
} from './types';

export const signUpRequest = (payload = {}) => ({
  type: SIGN_UP_REQUEST,
  payload,
});

export const signUpSuccess = (payload = {}) => ({
  type: SIGN_UP_SUCCESS,
  payload,
});

export const signUpError = (payload = {}) => ({
  type: SIGN_UP_ERROR,
  payload,
});

export const signInRequest = (payload = {}) => ({
  type: SIGN_IN_REQUEST,
  payload,
});

export const signInSuccess = (payload = {}) => ({
  type: SIGN_IN_SUCCESS,
  payload,
});

export const signInError = (payload = {}) => ({
  type: SIGN_IN_ERROR,
  payload,
});

export const verifyCodeRequest = (payload = {}) => ({
  type: VERIFY_CODE_REQUEST,
  payload,
});

export const verifyCodeSuccess = (payload = {}) => ({
  type: VERIFY_CODE_SUCCESS,
  payload,
});

export const verifyCodeError = (payload = {}) => ({
  type: VERIFY_CODE_ERROR,
  payload,
});
