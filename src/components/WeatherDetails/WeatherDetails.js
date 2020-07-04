import React from "react";
import { connect } from "react-redux";

const WeatherDetails = (props) => {
  let data = {};
  const id = props.match.params.id;

  if (props.isSearching) {
    data = props.searchData[id];
  } else {
    data = props.geolocationData[id];
  }

  console.log(data);

  return (
    <div>
      <div></div>
    </div>
  );
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
