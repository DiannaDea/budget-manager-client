import { connect } from 'react-redux';
import { authCardRequest, saveCardRequest, resetAuthedCard } from '../../redux/actions/cards';
import ConnectCardModalView from './ConnectCardModal.view';

const mapStateToProps = (state) => {
  const {
    cards: {
      auth: {
        data: cardAuth,
        error: cardAuthError,
      },
      savedCard: {
        data: savedCard,
        error: savedCardError,
      },
    },
    groups: {
      data: groups,
    },
  } = state;

  return {
    cardAuth,
    cardAuthError,
    savedCard,
    savedCardError,
    groups,
  };
};

const mapDispatchToProps = (dispatch) => ({
  authCard: (payload) => dispatch(authCardRequest(payload)),
  saveCard: (payload) => dispatch(saveCardRequest(payload)),
  resetAuthedCard: (payload) => dispatch(resetAuthedCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectCardModalView);
