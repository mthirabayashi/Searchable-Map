import { connect } from 'react-redux';
import {addSearch} from '../../actions/history_actions';
import Search from './search';

console.log('loading search container');
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
)(Search);
