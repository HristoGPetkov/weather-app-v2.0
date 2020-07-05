import React, { useState } from "react";

import Toolbar from "../navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Toolbar
        toggleMenu={() => setIsMenuOpen((prevValue) => !prevValue)}
        isMenuOpen={isMenuOpen}
      />
      <main className={classes.Layout}>{props.children}</main>
    </>
  );
};

export default Layout;
