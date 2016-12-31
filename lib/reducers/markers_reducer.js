import { CLEAR_MARKERS, ADD_MARKER } from '../actions/markers_actions';

const MarkersReducer = (state = [], action) => {
	Object.freeze(state);
	switch(action.type) {
		case CLEAR_MARKERS:
			return [];
		case ADD_MARKER:
			return state.concat(action.marker);
		default:
			return state;
	}
};

export default MarkersReducer;
