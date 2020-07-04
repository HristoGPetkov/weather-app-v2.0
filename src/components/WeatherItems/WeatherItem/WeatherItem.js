import React from "react";
import { withRouter } from "react-router-dom";

import classes from "./WeatherItem.module.css";

const WeatherItem = ({
  id,
  minTemp,
  maxTemp,
  weekday,
  language,
  date,
  iconId,
  description,
  history,
}) => {
  return (
    <div
      className={classes.WeatherItem}
      onClick={() => history.push(`/item/${id}`)}
    >
      <h4>{weekday}</h4>
      <p>{date}</p>
      <i className={`wi wi-owm-day-${iconId}`} />
      <p>{language === "en" ? "min / max" : "мин / макс"}</p>
      <p>
        {Math.round(minTemp)} &deg;C | {Math.round(maxTemp)} &deg;C
      </p>
      <p>{description}</p>
    </div>
  );
};

export default withRouter(WeatherItem);
