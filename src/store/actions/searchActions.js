import * as actionTypes from "./actionTypes";
import {
  loadingEnd,
  loadingStart,
  changeCityAndCountry,
  fetchWeatherFail,
} from "./index";
import { transformData, apKey } from "../../utils/utils";

export const fetchSearchSuccess = (data) => ({
  type: actionTypes.FETCH_SEARCH_SUCCESS,
  data: data,
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
        dispatch(changeCityAndCountry(json.city.name, json.city.country));
        const data = transformData(json);

        dispatch(fetchSearchSuccess(data));
      })
      .catch((err) => dispatch(fetchWeatherFail(err)))
      .finally(() => dispatch(loadingEnd()));
  };
};
