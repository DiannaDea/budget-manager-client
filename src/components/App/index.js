import { connect } from 'react-redux';
import { getGroupsRequest } from '../../redux/actions/groups';
import { getCategoriesRequest } from '../../redux/actions/categories';

import App from './App.view';

const mapStateToProps = (state) => {
  const {
    user: {
      accessToken,
      refreshToken,
    },
    groups: {
      data: groups,
    },
  } = state;

  return {
    accessToken,
    refreshToken,
    groups,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getGroups: (payload) => dispatch(getGroupsRequest(payload)),
  getCategories: (payload) => dispatch(getCategoriesRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
