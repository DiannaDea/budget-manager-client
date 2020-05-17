import initialState from '../store/initialState';
import {
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_ERROR,
  SAVE_TRANSACTION_REQUEST,
  SAVE_TRANSACTION_SUCCESS,
  SAVE_TRANSACTION_ERROR,
  RESET_SAVED_TRANSACTION,
  UPDATE_TRANSACTION_REQUEST,
  UPDATE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_ERROR,
  DELETE_TRANSACTION_REQUEST,
  DELETE_TRANSACTION_SUCCESS,
  DELETE_TRANSACTION_ERROR,
} from '../actions/types';

const updateTransaction = (data, { transactionId, updateFields }) => {
  const newRows = Object.keys(data.rows).reduce((transactions, date) => {
    const newTransactions = data.rows[date]
      .map((transaction) => {
        if (transaction.id === transactionId) {
          return {
            ...transaction,
            ...updateFields,
          };
        }
        return { ...transaction };
      });

    return {
      ...transactions,
      [date]: newTransactions,
    };
  }, {});
  return {
    ...data,
    rows: newRows,
  };
};

const deleteTransaction = (data, { transactionId }) => {
  const newRows = Object.keys(data.rows).reduce((transactions, date) => {
    const newTransactions = data.rows[date]
      .map((transaction) => {
        if (transaction.id === transactionId) {
          return null;
        }
        return { ...transaction };
      });

    return {
      ...transactions,
      [date]: newTransactions.filter(Boolean),
    };
  }, {});
  return {
    ...data,
    rows: newRows,
  };
};

export default (state = initialState.transactions, action = {}) => {
  const { type } = action;

  const typeToFunc = {
    [GET_TRANSACTIONS_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [GET_TRANSACTIONS_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      transactionsChanged: false,
      data: action.payload,
    }),
    [GET_TRANSACTIONS_ERROR]: () => ({
      ...state,
      isFetching: false,
      data: null,
      error: action.payload,
    }),
    [SAVE_TRANSACTION_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [SAVE_TRANSACTION_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      transactionsChanged: true,
    }),
    [SAVE_TRANSACTION_ERROR]: () => ({
      ...state,
      isFetching: false,
      transactionsChanged: false,
    }),
    [RESET_SAVED_TRANSACTION]: () => ({
      ...state,
      isFetching: false,
      transactionsChanged: false,
    }),
    [UPDATE_TRANSACTION_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [UPDATE_TRANSACTION_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      transactionsChanged: true,
      data: updateTransaction(state.data, action.payload),
    }),
    [UPDATE_TRANSACTION_ERROR]: () => ({
      ...state,
      isFetching: false,
      data: null,
      error: action.payload,
    }),
    [DELETE_TRANSACTION_REQUEST]: () => ({
      ...state,
      isFetching: true,
    }),
    [DELETE_TRANSACTION_SUCCESS]: () => ({
      ...state,
      isFetching: false,
      transactionsChanged: true,
      data: deleteTransaction(state.data, action.payload),
    }),
    [DELETE_TRANSACTION_ERROR]: () => ({
      ...state,
      isFetching: false,
      data: null,
      error: action.payload,
    }),
  };

  const actionHandler = typeToFunc[type] || (() => state);
  return actionHandler();
};
