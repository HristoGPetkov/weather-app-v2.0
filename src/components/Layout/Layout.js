import React, { useState, useEffect } from "react";

import { getScrollWidth, extraPaddingRight } from "../../utils/utils";
import classes from "./Layout.module.css";
import Toolbar from "../navigation/Toolbar/Toolbar";
import Sidedrawer from "../navigation/Sidedrawer/Sidedrawer";
import NavItems from "../navigation/NavItems/NavItems";
import Backdrop from "../UI/Backdrop/Backdrop";
import ScrollTop from "../UI/ScrollTop/ScrollTop";

const Layout = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const layoutComp = document.body.querySelector("[class*=Layout]");
    const toolbarComp = document.body.querySelector("[class*=Toolbar]");
    const { clientHeight, scrollHeight } = document.documentElement;
    const scrollbar = scrollHeight > clientHeight; // is there scrollbar on the page

    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // disable scrolling

      if (scrollbar) {
        // if there is scrollbar get it's width
        const scrollWidth = getScrollWidth(); // the width of the scrollbar

        extraPaddingRight(scrollWidth, layoutComp, toolbarComp);
      }
    } else {
      document.body.style.overflow = ""; // enable scrolling
    }

    return () => {
      // remove extra padding if added previosly
      layoutComp.style.paddingRight = "";
      toolbarComp.style.paddingRight = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <Backdrop
        show={isMenuOpen}
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
