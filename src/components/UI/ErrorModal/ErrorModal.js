import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import LangSelect from "../LangSelect/LangSelect";
import classes from "./ErrorModal.module.css";
import { translate } from "../../../utils/utils";

const ErrorModal = ({ error, language, clearErr }) => {
  let errorMsg = "";

  if (error) {
    errorMsg = error.message;
  }

  if (error && error.message === "User denied Geolocation") {
    errorMsg = (
      <>
        {translate(
          language,
          "Моля използвайте търсачката или позволете геолокация в браузъра!",
          "Please use the search functionality or enable geolocation in the browser!"
        )}
      </>
    );
  }

  return (
    <>
      <Backdrop show={error} clickHandler={clearErr} zIndex90 />
      <div className={`${classes.ErrorModal} ${error && classes.Show}`}>
        <h2>
          {translate(language, "Възникна грешка!", "An Error Occurred!")}{" "}
          <LangSelect />
        </h2>
        <p>{errorMsg}</p>
        <div className={classes.Actions}>
          <button type="button" onClick={clearErr}>
            {translate(language, "Добре", "Okay")}
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
