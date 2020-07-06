import React, { useState } from "react";
import { connect } from "react-redux";

import { fetchSearchData } from "../../../store/actions";
import classes from "./Searchbar.module.css";
import { translate } from "../../../utils/utils";

const Searchbar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) return;

    props.sendSearch(searchTerm, props.language);
    setSearchTerm("");
  };

  return (
    <form className={classes.Searchbar} onSubmit={submitHandler}>
      <label htmlFor="search"></label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder={translate(
          props.language,
          "Търси прогноза по град",
          "Search for city forecast"
        )}
        autoComplete="off"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.generalReducer.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendSearch: (term, lang) => dispatch(fetchSearchData(term, lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
