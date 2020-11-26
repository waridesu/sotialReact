import React from "react";
import s from "./Users.module.css";
import {Link} from "react-router-dom";
import {usersType} from "../../redux/usersReducer";

type propsType ={
    users: Array<usersType>
    followingInProgress: Array<number>
    unfollow: (id:number)=>void
    follow: (id:number)=>void
}
const Users = ({users, followingInProgress, unfollow, follow}:propsType) => <div>
    {users.map(u => (
        <div className={s.users_profile} key={u.id}>
            <div className={s.subscriber}>
                <Link to={"/profile/" + u.id}>
                    <img
                        src={
                            u.photos.small
                                ? u.photos.small
                                : "https://www.vikids.ru/images/default_avatar.png?avatar_cached_at=1562752082"
                        }
                        alt="user avatar"
                    />
                </Link>
                {u.followed ? (
                    <button
                        disabled={followingInProgress.some(id => id === u.id)}
                        onClick={() => {
                            unfollow(u.id);
                        }}
                    >
                        Unfollow
                    </button>
                ) : (
                    <button
                        disabled={followingInProgress.some(id => id === u.id)}
                        onClick={() => {
                            follow(u.id);
                        }}
                    >
                        Follow
                    </button>
                )}
            </div>
            <div className={s.users_profile__info}>
                <div className={s.users_profile__name}>
                    <p>{u.name}</p>
                    <p>{u.status}</p>
                </div>
            </div>
        </div>
    ))}
</div>

export default Users;
