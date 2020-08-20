import React from "react";
import s from "./Preloader.module.css";
import loader from "./loader.gif";

const Preloader = () => (
  <img className={s.load_image} src={loader} alt="preloading" />
);

export default Preloader;
