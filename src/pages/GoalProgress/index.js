import { connect } from 'react-redux';
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

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(GoalProgress);
