import initialState from '../store/initialState';
import {
  GET_GOALS_REQUEST,
  GET_GOALS_SUCCESS,
  GET_GOALS_ERROR,
} from '../actions/types';

export default (state = initialState.goals, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    [GET_GOALS_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [GET_GOALS_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      data: action.payload,
    }),
    [GET_GOALS_ERROR]: () => ({
      ...state,
      isFetching: false,
      data: null,
      error: action.payload,
    }),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
