import initialState from '../store/initialState';
import {
  GET_GOALS_REQUEST,
  GET_GOALS_SUCCESS,
  GET_GOALS_ERROR,
  CREATE_GOAL_REQUEST,
  CREATE_GOAL_SUCCESS,
  CREATE_GOAL_ERROR,
  DELETE_GOAL_REQUEST,
  DELETE_GOAL_SUCCESS,
  DELETE_GOAL_ERROR,
} from '../actions/types';

const createGoal = (goals, goalInfo) => [
  ...goals,
  goalInfo,
];

const deleteGoal = (goals, { goalId }) => goals.filter((goal) => goal.goal.id === goalId);

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
    [CREATE_GOAL_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [CREATE_GOAL_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      data: createGoal(state.data, action.payload),
    }),
    [CREATE_GOAL_ERROR]: () => ({
      ...state,
      isFetching: false,
      error: action.payload,
    }),
    [DELETE_GOAL_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [DELETE_GOAL_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      data: deleteGoal(state.data, action.payload),
    }),
    [DELETE_GOAL_ERROR]: () => ({
      ...state,
      isFetching: false,
      error: action.payload,
    }),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
