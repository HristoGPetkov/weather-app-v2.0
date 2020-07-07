import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { fetchWeatherData, clearError } from "./store/actions";
import Layout from "./components/Layout/Layout";
import WeatherItems from "./components/WeatherItems/WeatherItems";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import ErrorModal from "./components/UI/ErrorModal/ErrorModal";

class App extends Component {
  componentDidMount() {
    this.props.fetchGeolocationData(this.props.language);
  }

  render() {
    const { country, city, error, language, clearErr } = this.props;

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
        {this.props.error && (
          <ErrorModal error={error} language={language} clearErr={clearErr} />
        )}
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
    clearErr: () => dispatch(clearError()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
