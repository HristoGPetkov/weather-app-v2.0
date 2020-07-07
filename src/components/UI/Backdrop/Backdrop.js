import React from "react";

import classes from "./Backdrop.module.css";

const Backdrop = (props) => {
  let output = null;

  if (props.show) {
    output = (
      <div
        className={`${classes.Backdrop} ${props.zIndex90 && classes.zIndex90}`}
        onClick={props.clickHandler}
      ></div>
    );
  }

  return output;
};

export default Backdrop;
