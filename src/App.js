import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import {
  fetchWeatherData,
  fetchSearchData,
  fetchCurrentWeatherData,
} from "./store/actions";

import Layout from "./components/Layout/Layout";
import Spinner from "./components/UI/Spinner/Spinner";

class App extends Component {
  componentDidMount() {
    console.log("COMPONENT DID MOUNT APP");
    //this.props.fetchData(this.props.language);
  }

  handler = () => {
    this.props.fetchSearch("Варна", "bg");
  };

  currentHandler = () => {
    const { fetchCurrent, city, coutry, language } = this.props;

    fetchCurrent(city, coutry, language);
  };

  render() {
    // let app = "App";

    // if (this.props.loading) {
    //   app = <Spinner />;
    // }

    // let d = {};

    // if (this.props.isSearching) {
    //   d = this.props.searchData;
    // } else {
    //   d = this.props.geolocationData;
    // }

    // console.log(d);

    return <Layout>App</Layout>;
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
    coutry: state.generalReducer.coutry,
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
