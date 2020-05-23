import initialState from '../store/initialState';
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
  LOGOUT,
} from '../actions/types';

export default (state = initialState.user, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    [SIGN_UP_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [SIGN_UP_SUCCESS]: () => ({
      ...state,
      error: null,
      isFetching: false,
    }),
    [SIGN_UP_ERROR]: () => ({
      ...state,
      isFetching: false,
      error: action.payload,
    }),
    [SIGN_IN_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [SIGN_IN_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      error: null,
      qrcode: action.payload.qrcode,
    }),
    [SIGN_IN_ERROR]: () => ({
      ...state,
      isFetching: false,
      qrcode: null,
      error: action.payload,
    }),
    [VERIFY_CODE_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [VERIFY_CODE_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      error: null,
      tokens: action.payload.tokens,
      info: action.payload.user,
    }),
    [VERIFY_CODE_ERROR]: () => ({
      ...state,
      isFetching: false,
      tokens: {
        accessToken: null,
        refreshToken: null,
      },
      error: action.payload,
    }),
    [LOGOUT]: () => ({
      ...state,
      error: null,
      isFetching: false,
      tokens: {
        accessToken: null,
        refreshToken: null,
      },
    }),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
