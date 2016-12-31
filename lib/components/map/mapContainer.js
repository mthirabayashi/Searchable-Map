import { connect } from 'react-redux';
import Map from './map';
import {addSearch} from '../../actions/history_actions';
import {clearMarkers} from '../../actions/markers_actions';

console.log('loading map container');
const mapStateToProps = (state) => {
  return ({
    history: state.history,
    markers: state.markers
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    clearMarkers: () => dispatch(clearMarkers())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
