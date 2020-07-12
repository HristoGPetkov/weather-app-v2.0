import React, { useState, useEffect } from "react";

import classes from "./ScrollTop.module.css";

const ScrollTop = () => {
  const [show, setShow] = useState(false);

  // Debounce function
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

  // Shows the scroll to the top button if enough is scrolled down
  const scrollHandler = () => {
    setShow(window.pageYOffset > document.documentElement.clientHeight);
  };

  useEffect(() => {
    const handler = debounce(scrollHandler, 100);

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`${classes.ScrollTop} ${show ? classes.Show : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    ></div>
  );
};

export default ScrollTop;
