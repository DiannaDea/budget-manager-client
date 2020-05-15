import { combineReducers } from 'redux';
import banksReducer from './banks';
import cardsReducer from './cards';
import groupsReducer from './groups';

const reducer = combineReducers({
  banks: banksReducer,
  cards: cardsReducer,
  groups: groupsReducer,
});

export default reducer;
