import { CLEAR_MARKERS, ADD_MARKER, DELETE_MARKER } from '../actions/markers_actions';

const MarkersReducer = (state = [], action) => {
	Object.freeze(state);
  let oldState = state;
	switch(action.type) {
		case CLEAR_MARKERS:
			return [];
		case ADD_MARKER:
			return state.concat(action.marker);
		case DELETE_MARKER:
      let newState = oldState.slice(0, action.marker);
      newState = newState.concat(oldState.slice(action.marker+1, oldState.length+1));
    return newState;
		default:
			return state;
	}
};

export default MarkersReducer;
