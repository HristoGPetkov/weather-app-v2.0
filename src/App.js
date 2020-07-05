import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { fetchWeatherData } from "./store/actions";

import Layout from "./components/Layout/Layout";
import WeatherItems from "./components/WeatherItems/WeatherItems";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";

class App extends Component {
  componentDidMount() {
    this.props.fetchGeolocationData(this.props.language);
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/item/:id" component={WeatherDetails} />
          <Route path="/current-weather" component={CurrentWeather} />
          <Route path="/" exact component={WeatherItems} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.generalReducer.loading,
    isSearching: state.generalReducer.isSearching,
    language: state.generalReducer.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGeolocationData: (lang) => dispatch(fetchWeatherData(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
