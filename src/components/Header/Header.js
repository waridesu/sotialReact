import React from 'react';
import logo from '../../logo.svg';
import avatar from '../../avatar.jpg'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';


const Header = () =>
  <header>
    <div className={s.header_container}>
      <img className={s.header_logo} src={logo} alt="logo" width="40" height="40" />
      <form>
        <input type="search" placeholder="search" />
        <button type="button" />
      </form>
      <nav>
        <NavLink to="/blan" activeClassName={s.active}>Home</NavLink>
        <NavLink to="/blak" activeClassName={s.active}>News</NavLink>
        <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
        <NavLink to="/dialogs" activeClassName={s.active}>Massages</NavLink>
      </nav>
      <div className={s.heder_profile}>
        <img src={avatar} height="40" width="40" alt=""/>
        <NavLink to="_bank" exact activeClassName={s.active}>Denis</NavLink>
        <button type="button" />
      </div>
    </div>
  </header>
  
  export default Header;