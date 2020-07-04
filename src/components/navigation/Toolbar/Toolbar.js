import React from "react";
import { connect } from "react-redux";

import classes from "./Toolbar.module.css";
import NavItems from "../NavItems/NavItems";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <h1>
        {props.city}, <span>{props.country}</span>
      </h1>
      <NavItems />
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    language: state.generalReducer.language,
    city: state.generalReducer.city,
    country: state.generalReducer.country,
  };
};

export default connect(mapStateToProps)(Toolbar);
