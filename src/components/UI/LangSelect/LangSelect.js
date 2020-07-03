import React from "react";

import classes from "./LangSelect.module.css";

const LangSelect = () => {
  return (
    <div className={classes.LangSelect}>
      <button>EN</button>
      <button>BG</button>
    </div>
  );
};

export default LangSelect;
