import React from "react";

import classes from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className={classes.skCircle}>
      <div className={`${classes.skCircle1} ${classes.skChild}`}></div>
      <div className={`${classes.skCircle2} ${classes.skChild}`}></div>
      <div className={`${classes.skCircle3} ${classes.skChild}`}></div>
      <div className={`${classes.skCircle4} ${classes.skChild}`}></div>
      <div className={`${classes.skCircle5} ${classes.skChild}`}></div>
      <div className={`${classes.skCircle6} ${classes.skChild}`}></div>
      <div className={`${classes.skCircle7} ${classes.skChild}`}></div>
      <div className={`${classes.skCircle8} ${classes.skChild}`}></div>
      <div className={`${classes.skCircle9} ${classes.skChild}`}></div>
      <div className={`${classes.skCircle10} ${classes.skChild}`}></div>
      <div className={`${classes.skCircle11} ${classes.skChild}`}></div>
      <div className={`${classes.skCircle12} ${classes.skChild}`}></div>
    </div>
  );
};

export default Spinner;
