import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CURRENT_WEATHER:
      return { ...state, data: { ...action.data } };
    default:
      return state;
  }
};

export default reducer;
