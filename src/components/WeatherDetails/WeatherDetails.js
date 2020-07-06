import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import WeatherDetail from "./WeatherDetail/WeatherDetail";

const WeatherDetails = (props) => {
  let data = [];
  const id = props.match.params.id;

  if (props.isSearching) {
    data = props.searchData[id];
  } else {
    data = props.geolocationData[id];
  }

  let output = null;

  if (!data || data.length === 0) {
    output = <Redirect to="/" />;
  } else {
    output = data.map((item) => {
      const currentDate = item.dt_txt;
      const { description, id: iconId, main, icon: daytime } = item.weather[0];
      const { temp, humidity, pressure } = item.main;
      const { speed: windSpeed, deg: windDeg } = item.wind;

      return (
        <WeatherDetail
          key={currentDate}
          currentDate={currentDate}
          description={description}
          iconId={iconId}
          temp={temp}
          humidity={humidity}
          pressure={pressure}
          windSpeed={windSpeed}
          windDeg={windDeg}
          language={props.language}
          main={main}
          daytime={daytime}
        />
      );
    });
  }

  return <div>{output}</div>;
};

const mapStateToProps = (state) => {
  return {
    language: state.generalReducer.language,
    isSearching: state.generalReducer.isSearching,
    geolocationData: state.geolocationReducer.data,
    searchData: state.searchReducer.data,
  };
};

export default connect(mapStateToProps)(WeatherDetails);
