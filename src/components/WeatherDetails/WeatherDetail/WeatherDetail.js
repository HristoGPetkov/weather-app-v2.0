import React from "react";
import classes from "./WeatherDetail.module.css";

import { getCurrentTime } from "../../../utils/utils";

const WeatherDetail = ({
  currentDate,
  description,
  humidity,
  icon,
  pressure,
  temp,
  windDeg,
  windSpeed,
}) => {
  const d = currentDate ? new Date(currentDate) : new Date();
  const date = d.toLocaleDateString();
  const time = getCurrentTime(d);

  return (
    <div className={classes.WeatherDetail}>
      <p className={classes.Date}>{date}</p>
      <div className={classes.TimeIcon}>
        <i>Time icon here</i>
      </div>
      <div className={classes.WeatherIcon}>
        <i>Weather Icon here</i>
      </div>
      <p className={classes.Time}>{time}</p>
      <p className={classes.Temp}>
        {temp} <i>degree icon here</i>
      </p>
      <p className={classes.Description}>{description}</p>
      <p className={classes.Humidity}>Humidity</p>
      <div className={classes.HumidityIcon}>
        <i>{humidity}</i>
      </div>
      <p className={classes.WindSpeed}>Wind speed</p>
      <div className={classes.WindSpeedIcon}>
        <i>{windSpeed}</i>
      </div>
      <p className={classes.WindDir}>Wind direction</p>
      <div className={classes.WindDirIcon}>
        <i>{windDeg}</i>
      </div>
      <p className={classes.Pressure}>Pressure</p>
      <div className={classes.PressureIcon}>
        <i>{pressure}</i>
      </div>
    </div>
  );
};

export default WeatherDetail;
