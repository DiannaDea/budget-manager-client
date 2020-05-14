import initialState from '../store/initialState';
import {
  AUTH_CARD_REQUEST,
  AUTH_CARD_SUCCESS,
  AUTH_CARD_ERROR,
} from '../actions/types';

export default (state = initialState.cards, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    [AUTH_CARD_REQUEST]: () => ({
      ...state,
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
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
