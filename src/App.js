import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import {
  fetchWeatherData,
  fetchSearchData,
  fetchCurrentWeatherData,
} from "./store/actions";

import Layout from "./components/Layout/Layout";
import WeatherItems from "./components/WeatherItems/WeatherItems";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import Spinner from "./components/UI/Spinner/Spinner";

class App extends Component {
  componentDidMount() {
    console.log("COMPONENT DID MOUNT APP");
    this.props.fetchData(this.props.language);
  }

  handler = () => {
    this.props.fetchSearch("Варна", "bg");
  };

  currentHandler = () => {
    const { fetchCurrent, city, country, language } = this.props;

    fetchCurrent(city, country, language);
  };

  render() {
    return (
      <Layout>
        <button onClick={this.handler}>Search</button>
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
    geolocationData: state.geolocationReducer.data,
    searchData: state.searchReducer.data,
    language: state.generalReducer.language,
    city: state.generalReducer.city,
    country: state.generalReducer.country,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (lang) => dispatch(fetchWeatherData(lang)),
    fetchSearch: (cityName, language) =>
      dispatch(fetchSearchData(cityName, language)),
    fetchCurrent: (cityName, country, language) =>
      dispatch(fetchCurrentWeatherData(cityName, country, language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
