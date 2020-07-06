import React from "react";
import { withRouter } from "react-router-dom";

import classes from "./WeatherItem.module.css";
import { translate } from "../../../utils/utils";

const WeatherItem = ({
  id,
  minTemp,
  maxTemp,
  weekday,
  language,
  date,
  iconId,
  description,
  main,
  daytime,
  history,
}) => {
  const attachedClasses = [classes.WeatherItem];

  if (main.includes("Clear")) {
    attachedClasses.push(classes.Clear);
  }

  if (["Rain", "Thunderstorm", "Drizzle"].includes(main)) {
    attachedClasses.push(classes.Rain);
  }

  return (
    <div
      className={attachedClasses.join(" ")}
      onClick={() => history.push(`/item/${id}`)}
    >
      <h4>{weekday}</h4>
      <p>{date}</p>
      <i className={`wi wi-owm-day-${iconId}`} />
      <p>{translate(language, "мин / макс", "min / max")}</p>
      <p>
        {Math.round(minTemp)} &deg;C | {Math.round(maxTemp)} &deg;C
      </p>
      <p className={classes.Description}>{description}</p>
    </div>
  );
};

export default withRouter(WeatherItem);
