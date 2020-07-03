import React from "react";

import classes from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";
import LangSelect from "../../UI/LangSelect/LangSelect";
import Searchbar from "../../UI/Searchbar/Searchbar";

const NavItems = () => {
  return (
    <ul className={classes.NavItems}>
      <NavItem to={"/"}>Weekly weather</NavItem>
      <NavItem to={"/"}>Current weather</NavItem>
      <Searchbar />
      <LangSelect />
    </ul>
  );
};

export default NavItems;
