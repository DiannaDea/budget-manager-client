import { connect } from 'react-redux';
import { getGroupsRequest } from '../../redux/actions/groups';

import App from './App.view';

const mapStateToProps = (state) => {
  const {
    groups: {
      data: groups,
    },
  } = state;

  return {
    groups,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getGroups: (payload) => dispatch(getGroupsRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
