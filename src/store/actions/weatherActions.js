import * as actionTypes from "./actionTypes";
import { getCoords, transformData, apKey } from "../../utils/utils";

export const changeCityAndCountry = (city, country) => ({
  type: actionTypes.SET_CITY_AND_COUNTRY,
  city: city,
  country: country,
});

export const fetchWeatherFail = (error) => ({
  type: actionTypes.FETCH_WEATHER_FAIL,
  error: error,
});

export const fetchWeatherSuccess = (data) => ({
  type: actionTypes.FETCH_WEATHER_SUCCESS,
  data: data,
});

export const loadingStart = () => ({ type: actionTypes.LOADING_START });
export const loadingEnd = () => ({ type: actionTypes.LOADING_END });

export const setSearchingEnd = () => ({ type: actionTypes.SEARCHING_END });

export const fetchWeatherData = (language) => {
  return (dispatch) => {
    getCoords()
      .then((data) => {
        dispatch(loadingStart());
        dispatch(setSearchingEnd());
        const { latitude, longitude } = data.coords;
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&lang=${language}&appid=${apKey}&units=metric`
        )
          .then((response) => response.json())
          .then((json) => {
            dispatch(changeCityAndCountry(json.city.name, json.city.country));
            const data = transformData(json);

            dispatch(fetchWeatherSuccess(data));
          })
          .catch((err) => dispatch(fetchWeatherFail(err)))
          .finally(() => dispatch(loadingEnd()));
      })
      .catch((err) => dispatch(fetchWeatherFail(err)));
  };
};
