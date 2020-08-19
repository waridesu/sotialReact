import React from "react";
import "./Button.module.css";
import { NavLink } from "react-router-dom";
import s from "./Button.module.css";

const Button = (props) => (
  <NavLink to={props.link} className={s.button}>
    {props.name}{" "}
  </NavLink>
);

export default Button;
