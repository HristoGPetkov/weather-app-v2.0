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
    case actionTypes.FETCH_SEARCH_FAIL:
      return { ...state, isSearching: false, error: action.error };
    case actionTypes.LOADING_START:
      return { ...state, loading: true, error: null };
    case actionTypes.LOADING_END:
      return { ...state, loading: false };
    case actionTypes.SET_CITY_AND_COUNTRY:
      return { ...state, city: action.city, country: action.country };
    case actionTypes.SEARCHING_START:
      return { ...state, isSearching: true };
    case actionTypes.SEARCHING_END:
      return { ...state, isSearching: false };
    case actionTypes.SET_LANGUAGE:
      return { ...state, language: action.language };
    case actionTypes.CLEAR_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default reducer;
