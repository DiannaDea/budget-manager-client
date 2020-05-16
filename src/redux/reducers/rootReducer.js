import { combineReducers } from 'redux';
import banksReducer from './banks';
import cardsReducer from './cards';
import groupsReducer from './groups';
import filtersReducer from './filters';
import transactionsReduces from './transactions';

const reducer = combineReducers({
  banks: banksReducer,
  cards: cardsReducer,
  groups: groupsReducer,
  filters: filtersReducer,
  transactions: transactionsReduces,
});

export default reducer;
