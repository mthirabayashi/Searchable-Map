import { ADDSEARCH } from '../actions/history_actions';

const HistoryReducer = (state = [], action) => {
	Object.freeze(state);
	switch(action.type) {
		case ADDSEARCH:
      let oldState = state;
      const updatedSearch = oldState.concat(action.search);
			return updatedSearch;
		// case CLEAR_SHOW:
		// 	return state;
		default:
			return state;
	}
};

export default HistoryReducer;
