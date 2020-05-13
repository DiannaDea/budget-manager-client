import { combineReducers } from 'redux';
import banksReducer from './banks';

const reducer = combineReducers({
  banks: banksReducer,
});

export default reducer;
