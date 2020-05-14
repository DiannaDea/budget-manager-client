import { connect } from 'react-redux';
import { authCardRequest, saveCardRequest } from '../../redux/actions/cards';
import ConnectCardModalView from './ConnectCardModal.view';

const mapStateToProps = (state) => {
  const {
    cards: {
      auth: {
        data: cardAuth,
      },
    },
  } = state;

  return {
    cardAuth,
  };
};

const mapDispatchToProps = (dispatch) => ({
  authCard: (payload) => dispatch(authCardRequest(payload)),
  saveCard: (payload) => dispatch(saveCardRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectCardModalView);
