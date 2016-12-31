export const CLEAR_MARKERS = "CLEAR_MARKERS";
export const ADD_MARKER = "ADD_MARKER";

export const clearMarkers = () => ({
  type: CLEAR_MARKERS
});
export const addMarker = (marker) => ({
  type: ADD_MARKER,
  marker
});
