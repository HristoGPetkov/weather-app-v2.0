import React from "react";

import classes from "./Toolbar.module.css";
import NavItems from "../NavItems/NavItems";

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <NavItems />
    </header>
  );
};

export default Toolbar;
