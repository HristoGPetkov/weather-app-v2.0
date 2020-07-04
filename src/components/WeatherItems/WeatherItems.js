import React from "react";
import { connect } from "react-redux";

import { getDayOfWeek } from "../../utils/utils";
import classes from "./WeatherItems.module.css";
import WeatherItem from "./WeatherItem/WeatherItem";

const WeatherItems = (props) => {
  let data = props.geolocationData;

  if (props.isSearching) data = props.searchData;

  let output = [];

  for (let key in data) {
    const tempsArray = data[key].map((elem) => elem.main.temp);
    const minTemp = Math.min(...tempsArray);
    const maxTemp = Math.max(...tempsArray);
    const d = new Date(+key);
    const date = d.toLocaleDateString();
    const weekday = getDayOfWeek(d.getDay(), props.language);
    const { id: iconId, description } = data[key][0].weather[0];

    output.push(
      <WeatherItem
        key={key}
        id={key}
        minTemp={minTemp}
        maxTemp={maxTemp}
        weekday={weekday}
        language={props.language}
        date={date}
        iconId={iconId}
        description={description}
      />
    );
  }

  return <div className={classes.WeatherItems}>{output}</div>;
};

const mapStateToProps = (state) => {
  return {
    geolocationData: state.geolocationReducer.data,
    searchData: state.searchReducer.data,
    loading: state.generalReducer.loading,
    error: state.generalReducer.error,
    isSearching: state.generalReducer.isSearching,
    language: state.generalReducer.language,
  };
};

export default connect(mapStateToProps)(WeatherItems);
