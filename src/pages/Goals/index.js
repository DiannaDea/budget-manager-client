import { connect } from 'react-redux';
import { getGoalsRequest } from '../../redux/actions/goals';
import { getGroupsRequest } from '../../redux/actions/groups';

import Goals from './Goals';

const mapStateToProps = (state) => {
  const {
    goals: {
      data: goals,
    },
    groups: {
      data: groups,
    },
  } = state;

  return {
    goals,
    groups,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getGoals: (payload) => dispatch(getGoalsRequest(payload)),
  getGroups: (payload) => dispatch(getGroupsRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Goals);
