import React from "react";

import classes from "./HamburgerIcon.module.css";

const HamburgerIcon = (props) => {
  console.log(props.isMenuOpen);
  return (
    <button
      onClick={props.toggleMenu}
      className={`${classes.HamburgerIcon} ${props.isMenuOpen ? "open" : ""}`}
    >
      <span className={classes.Span}></span>
    </button>
  );
};

export default HamburgerIcon;
