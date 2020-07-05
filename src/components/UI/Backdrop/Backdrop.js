import React from "react";

import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  let output = null;

  if (props.isMenuOpen) {
    output = (
      <div className={classes.Backdrop} onClick={props.clickHandler}></div>
    );
  }

  return output;
};

export default Backdrop;
