import React from "react";
import { connect } from "react-redux";

import { getDayOfWeek } from "../../utils/utils";
import classes from "./WeatherItems.module.css";
import WeatherItem from "./WeatherItem/WeatherItem";
import Spinner from "../UI/Spinner/Spinner";

const WeatherItems = (props) => {
  let data = props.geolocationData;

  if (props.isSearching) data = props.searchData;

  console.log(data);

  let weatherItems = [];

  for (let key in data) {
    const tempsArray = data[key].map((elem) => elem.main.temp);
    const minTemp = Math.min(...tempsArray);
    const maxTemp = Math.max(...tempsArray);
    const d = new Date(+key);
    const date = d.toLocaleDateString();
    const weekday = getDayOfWeek(d.getDay(), props.language);
    const { id: iconId, description, main, icon: daytime } = data[
      key
    ][0].weather[0];

    weatherItems.push(
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
        main={main}
        daytime={daytime}
      />
    );
  }

  let output;

  if (props.loading) {
    output = <Spinner />;
  } else {
    output = weatherItems;
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
