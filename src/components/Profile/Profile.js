import React from 'react';
import avatar from '../../avatar.jpg'
import s from './Profile.module.css'
import Button from "../Button/Button";

const Profile = () =>
    <aside>
        <div>
        </div>
        <div>
        </div>
        <div className={s.about}>
            <p>Denis Kononuchenko</p>
            <p>Junior react.js Developer</p>
        </div>
        <div>
            <p>Following</p>
            <span>34</span>
        </div>
        <div>
            <p>Followers</p>
            <span>155</span>
        </div> 
        <img src={avatar} alt="avatar" />
        <div className={s.button}>
            <Button name="View Profile" link="_blank" />
        </div>
    </aside>

export default Profile;