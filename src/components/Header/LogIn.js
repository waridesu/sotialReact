import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const LogIn = (props) =>
  props.isAuth ? (<>
    <div>{props.login}</div>
    <button onClick={props.LogOut}>X</button></>
  ) : (
    <NavLink
      to='/login'
      activeClassName={s.active} onClick={props.onBurger}
    >
      Login
    </NavLink>
  );

export default LogIn;
