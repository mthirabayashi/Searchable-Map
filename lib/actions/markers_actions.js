export const CLEAR_MARKERS = "CLEAR_MARKERS";
export const ADD_MARKER = "ADD_MARKER";
export const DELETE_MARKER = "DELETE_MARKER";

export const clearMarkers = () => ({
  type: CLEAR_MARKERS
});
export const addMarker = (marker) => ({
  type: ADD_MARKER,
  marker
});
export const deleteMarker = (marker) => ({
  type: DELETE_MARKER,
  marker
});
