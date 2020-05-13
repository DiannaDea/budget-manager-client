import initialState from '../store/initialState';
import {
  GET_BANKS_REQUEST,
  GET_BANKS_SUCCESS,
  GET_BANKS_ERROR,
} from '../actions/types';

export default (state = initialState.banks, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    [GET_BANKS_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [GET_BANKS_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      data: action.payload,
    }),
    [GET_BANKS_ERROR]: () => ({
      ...state,
      isFetching: false,
      paginationInfo: null,
      data: null,
      error: action.payload,
    }),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
