import { combineReducers } from 'redux';
import HistoryReducer from './history_reducer';
import MarkersReducer from './markers_reducer';

const RootReducer = combineReducers({
  history: HistoryReducer,
  markers: MarkersReducer
});

export default RootReducer;
