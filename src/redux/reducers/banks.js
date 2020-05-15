import initialState from '../store/initialState';
import {
  GET_BANKS_REQUEST,
  GET_BANKS_SUCCESS,
  GET_BANKS_ERROR,
  UPDATE_CARD_REQUEST,
  UPDATE_CARD_SUCCESS,
  UPDATE_CARD_ERROR,
  DELETE_CARD_REQUEST,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_ERROR,
  DELETE_BANK_REQUEST,
  DELETE_BANK_SUCCESS,
  DELETE_BANK_ERROR,
} from '../actions/types';

const updateCard = (banks, { cardId, updateFields }) => banks.map((bank) => {
  const bankCards = bank.cards.map((card) => {
    if (card.id === cardId) {
      return {
        ...card,
        ...updateFields,
      };
    }
    return {
      ...card,
    };
  });
  return {
    ...bank,
    cards: bankCards,
  };
});

const deleteCard = (banks, { cardId }) => banks.map((bank) => {
  const bankCards = bank.cards
    .map((card) => {
      if (card.id === cardId) {
        return null;
      }
      return {
        ...card,
      };
    })
    .filter(Boolean);
  return {
    ...bank,
    cards: bankCards,
  };
});

const deleteBank = (banks, { bankId }) => banks.map((bank) => {
  if (bank.bank.id === bankId) {
    return null;
  }
  return { ...bank };
}).filter(Boolean);

export default (state = initialState.banks, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    [GET_BANKS_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [GET_BANKS_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      data: action.payload,
    }),
    [GET_BANKS_ERROR]: () => ({
      ...state,
      isFetching: false,
      data: null,
      error: action.payload,
    }),
    [UPDATE_CARD_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [UPDATE_CARD_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      data: updateCard(state.data, action.payload),
    }),
    [UPDATE_CARD_ERROR]: () => ({
      ...state,
      isFetching: false,
      error: action.payload,
    }),
    [DELETE_CARD_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [DELETE_CARD_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      data: deleteCard(state.data, action.payload),
    }),
    [DELETE_CARD_ERROR]: () => ({
      ...state,
      isFetching: false,
      error: action.payload,
    }),
    [DELETE_BANK_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [DELETE_BANK_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      data: deleteBank(state.data, action.payload),
    }),
    [DELETE_BANK_ERROR]: () => ({
      ...state,
      isFetching: false,
      error: action.payload,
    }),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
