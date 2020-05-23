import { connect } from 'react-redux';
import { createGoalRequest, resetSavedGoal } from '../../redux/actions/goals';
import CreateGoalModal from './CreateGoalModal';

const mapStateToProps = (state) => {
  const {
    goals: {
      data: goals,
      goalsChanged,
    },
  } = state;

  return {
    goals,
    goalsChanged,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createGoal: (payload) => dispatch(createGoalRequest(payload)),
  resetSavedGoal: (payload) => dispatch(resetSavedGoal(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGoalModal);
