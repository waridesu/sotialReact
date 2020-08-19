import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const LogIn = (props) =>
  props.isAuth ? (
    props.login
  ) : (
    <NavLink
      onClick={() => {
        props.getAuthData();
      }}
      to={props.location}
      exact
      activeClassName={s.active}
    >
      Login
    </NavLink>
  );

export default LogIn;
