import React from "react";
import avatar from "../../avatar.jpg";
import s from "./Profile.module.css";

const Resume = () =>
    <div className={s.resume}>
        <img src={avatar} alt="avatar"/>
        <p><strong>Denis Kononuchenko</strong></p>
        <p>Junior react.js Developer</p>
        <p>Опыт работы с графическими пакетами — Photoshop и Figma</p>
        <p>English preIntermediate</p>
        <p>React: классовые компоненты, хуки, паттерны и чистота компонент</p>
        <p>Redux: Flux паттерны, Api запросы и thunk</p>
        <p>JS : Promises, Scope, Generators, Async / Await</p>
        <p>HTML5 валидная верстка,CSS3(адаптивная)</p>
        <br/>
        <p>Логин: <b>waridesu@gmail.com</b></p>
        <p>Пароль: <b>password</b></p>
    </div>


export default Resume;
