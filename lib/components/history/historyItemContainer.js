import { connect } from 'react-redux';
import HistoryItem from './historyItem';
import { deletePlace } from '../../actions/history_actions';
import { deleteMarker } from '../../actions/markers_actions';

const mapStateToProps = (state) => {
  return ({
    history: state.history,
    markers: state.markers
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    deletePlace: (place) => dispatch(deletePlace(place)),
    deleteMarker: (marker) => dispatch(deleteMarker(marker))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryItem);
