import * as actionTypes from "./actionTypes";
import { loadingEnd, loadingStart, changeCityAndCountry } from "./index";
import { transformData, apKey } from "../../utils/utils";

export const fetchSearchSuccess = (data) => ({
  type: actionTypes.FETCH_SEARCH_SUCCESS,
  data: data,
});

export const fetchSearchFail = (error) => ({
  type: actionTypes.FETCH_SEARCH_FAIL,
  error: error,
});

export const setSearchingStart = () => ({ type: actionTypes.SEARCHING_START });

export const fetchSearchData = (cityName, language) => {
  return (dispatch) => {
    dispatch(loadingStart());
    dispatch(setSearchingStart());

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&lang=${language}&appid=${apKey}&units=metric`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.cod === "404") return;

        if (json.cod !== "200") throw new Error(json.message);

        dispatch(changeCityAndCountry(json.city.name, json.city.country));
        const data = transformData(json);

        dispatch(fetchSearchSuccess(data));
      })
      .catch((err) => dispatch(fetchSearchFail(err)))
      .finally(() => dispatch(loadingEnd()));
  };
};
