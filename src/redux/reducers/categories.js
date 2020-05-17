import initialState from '../store/initialState';
import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_ERROR,
} from '../actions/types';

export default (state = initialState.categories, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    [GET_CATEGORIES_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [GET_CATEGORIES_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      data: action.payload,
    }),
    [GET_CATEGORIES_ERROR]: () => ({
      ...state,
      isFetching: false,
      data: null,
      error: action.payload,
    }),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
