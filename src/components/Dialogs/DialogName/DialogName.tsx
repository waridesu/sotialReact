import React from 'react';
import s from './../Dialog.module.css';
import { NavLink } from 'react-router-dom'
type PropsType={
    src:string
    id:number
    name: string
}

const DialogName= ({src,id, name}:PropsType) =>
    <div className={s.dialogItem}>
        <img src={src} alt="name Avatar" />
        <NavLink to={"/dialogs/" + id} exact activeClassName={s.active}>{name}</NavLink>
    </div>


export default DialogName;