import React from "react";
import { connect } from "react-redux";

import classes from "./Toolbar.module.css";
import NavItems from "../NavItems/NavItems";
import LangSelect from "../../UI/LangSelect/LangSelect";
import HamburgerIcon from "../../UI/HamburgerIcon/HamburgerIcon";

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <HamburgerIcon
        toggleMenu={props.toggleMenu}
        isMenuOpen={props.isMenuOpen}
      />
      <h1>
        {props.city}
        <span>{props.country}</span>
      </h1>
      <NavItems language={props.language} />
      <LangSelect />
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
