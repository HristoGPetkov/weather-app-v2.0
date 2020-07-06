import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./CurrentWeather.module.css";
import { fetchCurrentWeatherData } from "../../store/actions";
import WeatherDetail from "../WeatherDetails/WeatherDetail/WeatherDetail";

class CurrentWeather extends Component {
  componentDidMount() {
    const { fetchCurrentData, language, city, country } = this.props;

    if (!city) {
      this.props.history.replace("/");
    } else {
      fetchCurrentData(city, country, language);
    }
  }

  componentDidUpdate(prevProps) {
    const { fetchCurrentData, language, city, country } = this.props;

    if (!city) {
      this.props.history.replace("/");
    }

    if (
      prevProps.language !== this.props.language ||
      (prevProps.city !== this.props.city &&
        prevProps.country !== this.props.country)
    ) {
      fetchCurrentData(city, country, language);
    }
  }

  render() {
    const summary = this.props.data;
    let output = "";

    if (this.props.Loading) {
      output = "Loading";
    }

    if (!this.props.Loading && summary.weather) {
      const {
        description,
        id: iconId,
        main,
        icon: daytime,
      } = summary.weather[0];
      const { temp, humidity, pressure } = summary.main;
      const { speed: windSpeed, deg: windDeg } = summary.wind;

      output = (
        <WeatherDetail
          description={description}
          iconId={iconId}
          temp={temp}
          humidity={humidity}
          pressure={pressure}
          windSpeed={windSpeed}
          windDeg={windDeg}
          language={this.props.language}
          main={main}
          daytime={daytime}
        />
      );
    }

    return <div className={classes.CurrentWeather}>{output}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.currentWeatherReducer.data,
    language: state.generalReducer.language,
    city: state.generalReducer.city,
    country: state.generalReducer.country,
    Loading: state.generalReducer.Loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentData: (city, country, language) =>
      dispatch(fetchCurrentWeatherData(city, country, language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
