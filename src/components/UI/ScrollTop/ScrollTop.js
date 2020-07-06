import React, { useState, useEffect } from "react";

import classes from "./ScrollTop.module.css";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  const scrollHandler = () => {
    const docHeight = document.documentElement.clientHeight;

    setShow(window.pageYOffset > docHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div
      className={`${classes.ScrollTop} ${show ? classes.Show : ""}`}
      onClick={() => window.scrollTo(0, 0)}
    ></div>
  );
};

export default ScrollTop;
