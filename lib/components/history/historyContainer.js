import { connect } from 'react-redux';
import History from './history';
import { clearHistory } from '../../actions/history_actions';
import { clearMarkers } from '../../actions/markers_actions';

const mapStateToProps = (state) => {
  return ({
    history: state.history,
    markers: state.markers
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    clearHistory: () => dispatch(clearHistory()),
    clearMarkers: () => dispatch(clearMarkers())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History);
