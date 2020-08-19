import React from 'react';
import s from './../Dialog.module.css';
import { NavLink } from 'react-router-dom'


const DialogName = (props) => 
    <div className={s.dialogitem}>
        <img src={props.src} alt="name Avatar" />
        <NavLink to={"/dialogs/" + props.id} exact activeClassName={s.active}>{props.name}</NavLink>
    </div>


export default DialogName;