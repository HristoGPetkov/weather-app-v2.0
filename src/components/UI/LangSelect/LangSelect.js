import React from "react";
import { connect } from "react-redux";

import classes from "./LangSelect.module.css";
import {
  setLanguage,
  fetchWeatherData,
  fetchSearchData,
} from "../../../store/actions";

const LangSelect = (props) => {
  const clickHandler = (e) => {
    const language = e.target.dataset.lang;

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
        EN
      </button>
      <button data-lang="bg" onClick={clickHandler}>
        BG
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
