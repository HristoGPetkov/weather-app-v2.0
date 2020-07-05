import React from "react";

import classes from "./Sidedrawer.module.css";

const Sidedrawer = (props) => {
  const attachedClasses = [classes.Sidedrawer];

  if (props.isMenuOpen) attachedClasses.push(classes.Open);

  return <nav className={attachedClasses.join(" ")}>{props.children}</nav>;
};

export default Sidedrawer;
