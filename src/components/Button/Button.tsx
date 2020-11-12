import React from "react";
import "./Button.module.css";
import {NavLink} from "react-router-dom";
import s from "./Button.module.css";

type props = {
    link: string
    name: string
}
const Button: React.FC<props> = ({link,name}) =>
    <NavLink to={link} className={s.button}>
        {name}{}
    </NavLink>

export default Button;
