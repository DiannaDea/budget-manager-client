import { connect } from 'react-redux';
import { signInRequest, verifyCodeRequest } from '../../redux/actions/user';
import LoginForm from './LoginForm';

const mapStateToProps = (state) => {
  const {
    user: {
      tokens,
      qrcode,
      error,
    },
  } = state;

  return {
    tokens,
    qrcode,
    error,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: (payload) => dispatch(signInRequest(payload)),
  verifyCode: (payload) => dispatch(verifyCodeRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
