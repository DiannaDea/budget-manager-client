import initialState from '../store/initialState';
import {
  AUTH_CARD_REQUEST,
  AUTH_CARD_SUCCESS,
  AUTH_CARD_ERROR,
  SAVE_CARD_REQUEST,
  SAVE_CARD_SUCCESS,
  SAVE_CARD_ERROR,
  RESET_AUTHED_CARD,
} from '../actions/types';

export default (state = initialState.cards, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    [AUTH_CARD_REQUEST]: () => ({
      ...state,
      newCardAdded: false,
      isFetching: true,
    }),
    [AUTH_CARD_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      auth: {
        data: action.payload,
        error: null,
      },
    }),
    [AUTH_CARD_ERROR]: () => ({
      ...state,
      isFetching: false,
      auth: {
        data: null,
        error: action.payload,
      },
    }),
    [SAVE_CARD_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [SAVE_CARD_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      newCardAdded: true,
      savedCard: {
        data: action.payload,
        error: null,
      },
    }),
    [SAVE_CARD_ERROR]: () => ({
      ...state,
      isFetching: false,
      savedCard: {
        data: null,
        error: action.payload,
      },
    }),
    [RESET_AUTHED_CARD]: () => ({
      ...state,
      isFetching: false,
      auth: {
        data: null,
        error: null,
      },
      savedCard: {
        data: null,
        error: null,
      },
    }),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
