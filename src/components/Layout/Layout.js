import React, { useState } from "react";

import classes from "./Layout.module.css";
import Toolbar from "../navigation/Toolbar/Toolbar";
import Sidedrawer from "../navigation/Sidedrawer/Sidedrawer";
import NavItems from "../navigation/NavItems/NavItems";
import Backdrop from "../UI/Backdrop/Backdrop";

const Layout = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Backdrop
        isMenuOpen={isMenuOpen}
        clickHandler={() => setIsMenuOpen((prevValue) => !prevValue)}
      />
      <Sidedrawer isMenuOpen={isMenuOpen}>
        <NavItems />
      </Sidedrawer>
      <Toolbar
        toggleMenu={() => setIsMenuOpen((prevValue) => !prevValue)}
        isMenuOpen={isMenuOpen}
      />
      <main className={classes.Layout}>{props.children}</main>
    </>
  );
};

export default Layout;
