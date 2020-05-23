import { connect } from 'react-redux';
import { getGoalsRequest } from '../../redux/actions/goals';
import GoalProgress from './GoalProgress';

const mapStateToProps = (state) => {
  const {
    goals: {
      data: goals,
    },
  } = state;

  return {
    goals,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getGoals: (payload) => dispatch(getGoalsRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalProgress);
