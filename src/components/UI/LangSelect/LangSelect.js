import React from "react";
import { connect } from "react-redux";

import classes from "./LangSelect.module.css";
import {
  setLanguage,
  fetchWeatherData,
  fetchSearchData,
} from "../../../store/actions";

import { ReactComponent as BgFlag } from "../../../assets/flags/bg.svg";
import { ReactComponent as GbFlag } from "../../../assets/flags/gb.svg";

const LangSelect = (props) => {
  const clickHandler = (e) => {
    const language = e.currentTarget.dataset.lang;

    if (props.prevLang === language) return;

    props.changeLang(language);

    if (!props.city && !props.country) return;

    if (props.isSearching) {
      props.fetchSearchData(props.city, language);
    } else {
      props.fetchGeolocationData(language);
    }
  };

  return (
    <div className={classes.LangSelect}>
      <button data-lang="en" onClick={clickHandler}>
        <GbFlag />
      </button>
      <button data-lang="bg" onClick={clickHandler}>
        <BgFlag />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    prevLang: state.generalReducer.language,
    city: state.generalReducer.city,
    country: state.generalReducer.country,
    isSearching: state.generalReducer.isSearching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLang: (lang) => dispatch(setLanguage(lang)),
    fetchGeolocationData: (lang) => dispatch(fetchWeatherData(lang)),
    fetchSearchData: (cityName, language) =>
      dispatch(fetchSearchData(cityName, language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LangSelect);
