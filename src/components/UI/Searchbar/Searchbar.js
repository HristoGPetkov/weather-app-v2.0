import React from "react";

import classes from "./Searchbar.module.css";

const Searchbar = () => {
  return (
    <form className={classes.Searchbar}>
      <label htmlFor="search"></label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search city"
        autoComplete="off"
      />
    </form>
  );
};

export default Searchbar;
