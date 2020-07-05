import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { fetchWeatherData } from "./store/actions";
import { translate } from "./utils/utils";
import Layout from "./components/Layout/Layout";
import WeatherItems from "./components/WeatherItems/WeatherItems";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";

class App extends Component {
  componentDidMount() {
    this.props.fetchGeolocationData(this.props.language);
  }

  render() {
    const { country, city, error, language } = this.props;

    let errorMsg = null;

    if (error) {
      console.log(error);
      console.log(error.message);
    }
    if (error && error.message === "User denied Geolocation") {
      errorMsg = (
        <h1>
          {translate(
            language,
            "Моля използвайте търсачката или позволете геолокация в браузъра!",
            "Please use the search functionality or enable geolocation in the browser!"
          )}
        </h1>
      );
    }

    let routes = (
      <>
        <Route path="/item/:id" component={WeatherDetails} />
        <Route path="/current-weather" component={CurrentWeather} />
        <Route path="/" exact component={WeatherItems} />
        <Redirect to="/" />
      </>
    );

    if (!country || !city) {
      routes = (
        <>
          <Route path="/" exact component={WeatherItems} />
          <Redirect to="/" />
        </>
      );
    }

    return (
      <Layout>
        {errorMsg}
        <Switch>{routes}</Switch>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.generalReducer.loading,
    isSearching: state.generalReducer.isSearching,
    language: state.generalReducer.language,
    error: state.generalReducer.error,
    city: state.generalReducer.city,
    country: state.generalReducer.country,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGeolocationData: (lang) => dispatch(fetchWeatherData(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
