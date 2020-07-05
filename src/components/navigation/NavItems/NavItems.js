import React from "react";
import { connect } from "react-redux";

import classes from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";
import Searchbar from "../../UI/Searchbar/Searchbar";
import { translate } from "../../../utils/utils";

const NavItems = ({ language }) => {
  return (
    <ul className={classes.NavItems}>
      <NavItem exact to={"/"}>
        {translate(language, "Седмична прогноза", "Weekly forecast")}
      </NavItem>
      <NavItem to={"/current-weather"}>
        {translate(language, "Времето в момента", "Current forecast")}
      </NavItem>
      <Searchbar />
    </ul>
  );
};

const mapStateToProps = (state) => ({
  language: state.generalReducer.language,
});

export default connect(mapStateToProps)(NavItems);
