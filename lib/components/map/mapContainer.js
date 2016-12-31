import { connect } from 'react-redux';
import Map from './map';
import {addSearch} from '../../actions/history_actions';

console.log('loading map container');
const mapStateToProps = (state) => {
  return ({
    history: state.history
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    addSearch: (search) => dispatch(addSearch(search))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
