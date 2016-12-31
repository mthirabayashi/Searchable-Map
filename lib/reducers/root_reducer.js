import { combineReducers } from 'redux';
import HistoryReducer from './history';

const RootReducer = combineReducers({
  history: HistoryReducer
});

export default RootReducer;
