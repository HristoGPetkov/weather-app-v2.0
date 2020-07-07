import React, { useState, useEffect } from "react";

import classes from "./ScrollTop.module.css";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  const debounce = (callback, wait) => {
    let timerId;

    return (...args) => {
      const context = this;

      clearTimeout(timerId);

      timerId = setTimeout(() => {
        callback.call(context, ...args);
      }, wait);
    };
  };

  const scrollHandler = () => {
    const docHeight = document.documentElement.clientHeight;

    setShow(window.pageYOffset > docHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(scrollHandler, 200));
  }, []);

  useEffect(() => {
    return () => window.removeEventListener("scroll", debounce(scrollHandler));
  }, []);

  return (
    <div
      className={`${classes.ScrollTop} ${show ? classes.Show : ""}`}
      onClick={() => window.scrollTo(0, 0)}
    ></div>
  );
};

export default ScrollTop;
