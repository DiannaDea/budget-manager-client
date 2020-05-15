import initialState from '../store/initialState';
import {
  GET_GROUPS_REQUEST,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_ERROR,
} from '../actions/types';

export default (state = initialState.groups, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    [GET_GROUPS_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [GET_GROUPS_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      data: action.payload,
    }),
    [GET_GROUPS_ERROR]: () => ({
      ...state,
      isFetching: false,
      data: null,
      error: action.payload,
    }),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
