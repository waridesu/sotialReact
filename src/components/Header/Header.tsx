import React, {useState} from "react";
import logo from "../../logo.svg";
import avatar from "../../avatar.jpg";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {DispatchPropsType, MapPropsType} from "./HeaderContainer";

const Header= ({isAuth, login,logOut}:MapPropsType&DispatchPropsType) => {
    const [isActive, setIsActive] = useState(false);
    const onBurger = () => !isActive ? setIsActive(true) : setIsActive(false)
    return <header>
        <div className={s.header_container}>
            <img
                className={s.header_logo}
                src={logo}
                alt="logo"
                width="40"
                height="40"
            />
            <form>
                <input type="search" placeholder="search"/>
                <button type="button" className={s.header_search}/>
            </form>
            <div className={`${s.burger} ${isActive ? s.active : null}`} onClick={onBurger}>
                <span/>
            </div>
            <nav className={isActive ? s.active : undefined}>
                <div className={s.header_profile}>
                    <img src={avatar} height="40" width="40" alt=""/>
                    {isAuth?(<>
                            <div>{login}</div>
                            <button onClick={logOut}>X</button>
                        </>
                    ) : (
                        <NavLink
                            to='/login'
                            activeClassName={s.active} onClick={onBurger}
                        >
                            Login
                        </NavLink>)}

                </div>
                <div className={s.links}>
                    <NavLink exact to="/" activeClassName={s.active} onClick={onBurger}>
                        Home
                    </NavLink>
                    <NavLink to="/profile" activeClassName={s.active} onClick={onBurger}>
                        Profile
                    </NavLink>
                    <NavLink to="/users" activeClassName={s.active} onClick={onBurger}>
                        Users
                    </NavLink>
                    <NavLink to="/dialogs" activeClassName={s.active} onClick={onBurger}>
                        Massages
                    </NavLink>
                </div>

            </nav>
        </div>
    </header>
};

export default Header;
