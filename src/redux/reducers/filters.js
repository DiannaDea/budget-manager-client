import initialState from '../store/initialState';
import {
  GET_FILTERS_REQUEST,
  GET_FILTERS_SUCCESS,
  GET_FILTERS_ERROR,
} from '../actions/types';

export default (state = initialState.filters, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    [GET_FILTERS_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [GET_FILTERS_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      data: action.payload,
    }),
    [GET_FILTERS_ERROR]: () => ({
      ...state,
      isFetching: false,
      data: null,
      error: action.payload,
    }),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
