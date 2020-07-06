import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li>
      <NavLink
        exact={props.exact}
        activeClassName={classes.active}
        className={classes.NavItem}
        to={props.to}
        onClick={props.closeMenu}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavItem;
