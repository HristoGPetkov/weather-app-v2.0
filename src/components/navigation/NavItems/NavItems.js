import React from "react";

import classes from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";
import Searchbar from "../../UI/Searchbar/Searchbar";
//import LangSelect from "../../UI/LangSelect/LangSelect";

const NavItems = () => {
  return (
    <ul className={classes.NavItems}>
      <NavItem exact to={"/"}>
        Weekly forecast
      </NavItem>
      <NavItem to={"/current-weather"}>Current forecast</NavItem>
      <Searchbar />
      {/* <LangSelect /> */}
    </ul>
  );
};

export default NavItems;
