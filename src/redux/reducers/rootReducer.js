import { combineReducers } from 'redux';
import banksReducer from './banks';
import cardsReducer from './cards';

const reducer = combineReducers({
  banks: banksReducer,
  cards: cardsReducer,
});

export default reducer;
