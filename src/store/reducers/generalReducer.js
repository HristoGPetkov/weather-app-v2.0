import * as actionTypes from "../actions/actionTypes";

const initialState = {
  city: "",
  country: "",
  language: "en",
  loading: false,
  error: null,
  isSearching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_WEATHER_FAIL:
      return { ...state, error: action.error };
    case actionTypes.LOADING_START:
      return { ...state, loading: true };
    case actionTypes.LOADING_END:
      return { ...state, loading: false };
    case actionTypes.SET_CITY:
      return { ...state, city: action.city };
    case actionTypes.SET_COUNTRY:
      return { ...state, country: action.country };
    case actionTypes.SEARCHING_START:
      return { ...state, isSearching: true };
    case actionTypes.SEARCHING_END:
      return { ...state, isSearching: false };
    default:
      return state;
  }
};

export default reducer;
