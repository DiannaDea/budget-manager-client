import { combineReducers } from 'redux';
import banksReducer from './banks';
import cardsReducer from './cards';
import groupsReducer from './groups';
import filtersReducer from './filters';
import transactionsReduces from './transactions';
import categoriesReducer from './categories';
import userReducer from './user';

const reducer = combineReducers({
  banks: banksReducer,
  cards: cardsReducer,
  groups: groupsReducer,
  filters: filtersReducer,
  transactions: transactionsReduces,
  categories: categoriesReducer,
  user: userReducer,
});

export default reducer;
