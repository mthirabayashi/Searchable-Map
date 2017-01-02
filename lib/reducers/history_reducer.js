import { ADDSEARCH, DELETE_PLACE, CLEAR_HISTORY } from '../actions/history_actions';

const HistoryReducer = (state = [], action) => {
	Object.freeze(state);
	let oldState = state;
	switch(action.type) {
		case ADDSEARCH:
      const updatedSearch = oldState.concat(action.search);
			return updatedSearch;
		case DELETE_PLACE:
			let newState = oldState.slice(0, action.place);
			newState = newState.concat(oldState.slice(action.place+1, oldState.length+1));
			return newState;
		case CLEAR_HISTORY:
			return [];
		default:
			return state;
	}
};

export default HistoryReducer;
