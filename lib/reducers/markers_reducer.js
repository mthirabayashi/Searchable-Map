import { CLEARMARKERS } from '../actions/markers_actions';

const MarkersReducer = (state = [], action) => {
	Object.freeze(state);
	switch(action.type) {
		case CLEARMARKERS:
			return [];
		// case CLEAR_SHOW:
		// 	return state;
		default:
			return state;
	}
};

export default MarkersReducer;
