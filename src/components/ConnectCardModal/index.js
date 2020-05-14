import { connect } from 'react-redux';
import { authCardRequest, saveCardRequest, resetAuthedCard } from '../../redux/actions/cards';
import ConnectCardModalView from './ConnectCardModal.view';

const mapStateToProps = (state) => {
  const {
    cards: {
      auth: {
        data: cardAuth,
      },
      savedCard: {
        data: savedCard,
        error: savedCardError,
      },
    },
  } = state;

  return {
    cardAuth,
    savedCard,
    savedCardError,
  };
};

const mapDispatchToProps = (dispatch) => ({
  authCard: (payload) => dispatch(authCardRequest(payload)),
  saveCard: (payload) => dispatch(saveCardRequest(payload)),
  resetAuthedCard: (payload) => dispatch(resetAuthedCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectCardModalView);
