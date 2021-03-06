import * as actionTypes from "./actionTypes";

import { loadingEnd, loadingStart, fetchWeatherFail } from "./index";

import { apKey } from "../../utils/utils";

export const fetchCurrentWeatherSuccess = (data) => ({
  type: actionTypes.FETCH_CURRENT_WEATHER,
  data: data,
});

export const fetchCurrentWeatherData = (cityName, country, language) => {
  return (dispatch) => {
    dispatch(loadingStart());

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${country}&lang=${language}&appid=${apKey}&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            "Something went wrong with your request! Error: " +
              response.statusText
          );
        }

        return response.json();
      })
      .then((json) => {
        dispatch(fetchCurrentWeatherSuccess(json));
      })
      .catch((err) => dispatch(fetchWeatherFail(err)))
      .finally(() => dispatch(loadingEnd()));
  };
};
