export const ADDSEARCH = "ADDSEARCH";
export const DELETE_PLACE = "DELETE_PLACE";
export const CLEAR_HISTORY = "CLEAR_HISTORY";

export const addSearch = search => ({
  type: ADDSEARCH,
  search
});
export const deletePlace = place => ({
  type: DELETE_PLACE,
  place
});
export const clearHistory = () => ({
  type: CLEAR_HISTORY
});
