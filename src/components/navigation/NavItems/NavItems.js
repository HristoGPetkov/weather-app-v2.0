import React from "react";
import { connect } from "react-redux";

import classes from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";
import Searchbar from "../../UI/Searchbar/Searchbar";
import { translate } from "../../../utils/utils";

const NavItems = ({ language, city, country, closeMenu }) => {
  let links = null;

  if (city && country) {
    links = (
      <>
        <NavItem exact to={"/"} closeMenu={closeMenu}>
          {translate(language, "Седмична прогноза", "Weekly forecast")}
        </NavItem>
        <NavItem to={"/current-weather"} closeMenu={closeMenu}>
          {translate(language, "Времето в момента", "Current forecast")}
        </NavItem>
      </>
    );
  }

  return (
    <ul className={classes.NavItems}>
      {links}
      <Searchbar />
    </ul>
  );
};

const mapStateToProps = (state) => ({
  language: state.generalReducer.language,
  city: state.generalReducer.city,
  country: state.generalReducer.country,
});

export default connect(mapStateToProps)(NavItems);
