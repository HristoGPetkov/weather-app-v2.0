import React, { useState } from "react";

import classes from "./Layout.module.css";
import Toolbar from "../navigation/Toolbar/Toolbar";
import Sidedrawer from "../navigation/Sidedrawer/Sidedrawer";
import NavItems from "../navigation/NavItems/NavItems";
import Backdrop from "../UI/Backdrop/Backdrop";
import ScrollTop from "../UI/ScrollTop/ScrollTop";

const Layout = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Backdrop
        isMenuOpen={isMenuOpen}
        clickHandler={() => setIsMenuOpen((prevValue) => !prevValue)}
      />
      <Sidedrawer isMenuOpen={isMenuOpen}>
        <NavItems closeMenu={() => setIsMenuOpen(false)} />
      </Sidedrawer>
      <Toolbar
        toggleMenu={() => setIsMenuOpen((prevValue) => !prevValue)}
        isMenuOpen={isMenuOpen}
      />
      <main className={classes.Layout}>{props.children}</main>
      <ScrollTop />
    </>
  );
};

export default Layout;
