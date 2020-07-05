import React from "react";

import classes from "./HamburgerIcon.module.css";

const HamburgerIcon = (props) => {
  const attachedClasses = [classes.HamburgerIcon];

  if (props.isMenuOpen) attachedClasses.push(classes.Open);

  return (
    <button onClick={props.toggleMenu} className={attachedClasses.join(" ")}>
      <span className={classes.Span}></span>
    </button>
  );
};

export default HamburgerIcon;
