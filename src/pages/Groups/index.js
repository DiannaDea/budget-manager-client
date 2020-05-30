import { connect } from 'react-redux';
import Groups from './Groups';

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

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Groups);
