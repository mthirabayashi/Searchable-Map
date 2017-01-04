import { connect } from 'react-redux';
import {addSearch} from '../../actions/history_actions';
import {addMarker} from '../../actions/markers_actions';
import Search from './search';

const mapStateToProps = (state) => {
  return ({
    history: state.history,
    markers: state.markers
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    addSearch: (search) => dispatch(addSearch(search)),
    addMarker: (marker) => dispatch(addMarker(marker))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
