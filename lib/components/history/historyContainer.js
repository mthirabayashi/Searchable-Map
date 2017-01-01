import { connect } from 'react-redux';
import History from './history';

const mapStateToProps = (state) => {
  return ({
    history: state.history
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
