import React, { Component } from "react";

import Toolbar from "../navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

class Layout extends Component {
  render() {
    return (
      <>
        <Toolbar />
        <main className={classes.Layout}>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
