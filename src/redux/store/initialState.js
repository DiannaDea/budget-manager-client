export default {
  banks: {
    data: [],
    error: null,
  },
  cards: {
    newCardAdded: false,
    auth: {
      data: null,
      error: null,
    },
    savedCard: {
      data: null,
      error: null,
    },
  },
  groups: {
    data: [],
    error: null,
  },
  transactions: {
    transactionsChanged: false,
    data: null,
    error: null,
  },
  filters: {
    data: null,
    error: null,
  },
  categories: {
    data: [],
    error: null,
  },
  user: {
    info: null,
    qrcode: null,
    tokens: {
      accessToken: localStorage.getItem('accessToken'),
      refreshToken: localStorage.getItem('refreshToken'),
    },
  },
};
