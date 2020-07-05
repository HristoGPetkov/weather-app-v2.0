import React from "react";
import classes from "./WeatherDetail.module.css";

import {
  getCurrentTime,
  formatHours,
  getWindDirection,
  translate,
} from "../../../utils/utils";

const WeatherDetail = ({
  currentDate,
  description,
  humidity,
  iconId,
  pressure,
  temp,
  windDeg,
  windSpeed,
  language,
}) => {
  const d = currentDate ? new Date(currentDate) : new Date();
  const date = d.toLocaleDateString();
  const time = getCurrentTime(d);

  return (
    <div className={classes.WeatherDetail}>
      <p className={classes.Date}>{date}</p>
      <div className={classes.TimeIcon}>
        <i className={`wi wi-time-${formatHours(d)}`}></i>
      </div>
      <div className={classes.WeatherIcon}>
        <i className={`wi wi-owm-day-${iconId}`}></i>
      </div>
      <p className={classes.Time}>{time}</p>
      <p className={classes.Temp}>
        {Math.round(temp)} <i className="wi wi-celsius"></i>
      </p>
      <p className={classes.Description}>{description}</p>
      <p className={classes.Humidity}>
        {translate(language, "Влажност", "Humidity")}
      </p>
      <div className={classes.HumidityIcon}>
        <i className="wi wi-humidity"></i>
        <span>{humidity}</span>
      </div>
      <p className={classes.WindSpeed}>
        {translate(language, "Скорост на Вятъра", "Wind speed")}
      </p>
      <div className={classes.WindSpeedIcon}>
        <i className={`wi wi-wind-beaufort-${Math.round(windSpeed)}`}></i>
        <span>
          {windSpeed.toFixed(1)} {translate(language, "м/с", "m/s")}
        </span>
      </div>
      <p className={classes.WindDir}>
        {translate(language, "Посока на вятъра", "Wind direction")}
      </p>
      <div className={classes.WindDirIcon}>
        <i className={`wi wi-wind towards-${windDeg}-deg`}></i>
        <span>{getWindDirection(windDeg, language)}</span>
      </div>
      <p className={classes.Pressure}>
        {translate(language, "Налягане", "Pressure")}
      </p>
      <div className={classes.PressureIcon}>
        <i className="wi wi-barometer"></i>
        <span>{pressure} hPa</span>
      </div>
    </div>
  );
};

export default WeatherDetail;
