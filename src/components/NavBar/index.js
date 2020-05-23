import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logout } from '../../redux/actions/user';
import NavBarView from './NavBar';

const mapStateToProps = (state) => {
  const {
    user: {
      tokens,
    },
  } = state;

  return {
    tokens,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBarView));
