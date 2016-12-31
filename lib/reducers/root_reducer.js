import { combineReducers } from 'redux';
import HistoryReducer from './history_reducer';

const RootReducer = combineReducers({
  history: HistoryReducer
});

export default RootReducer;
