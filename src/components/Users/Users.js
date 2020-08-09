import React from 'react';
import s from './Users.module.css';
import { Link } from 'react-router-dom';
import * as axios from 'axios'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount && i <= 35; i++) {
        pages.push(i);
    }
    return <div>{
        props.users.map(u => <div className={s.users_profile} key={u.id}>
            <div className={s.subscriber}>
                <Link to={"/profile/" + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : "https://www.vikids.ru/images/default_avatar.png?avatar_cached_at=1562752082"} alt="user avatar" />
                </Link>
                {u.followed
                    ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            { withCredentials: true, 
                                headers: {
                                    "API-KEY": "0562a8de-3256-4066-97e8-7bcda0eb8d22"}    })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                };

                            });
                        
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                            { withCredentials: true, 
                                headers: {
                                    "API-KEY": "0562a8de-3256-4066-97e8-7bcda0eb8d22"}    })
                            .then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                };

                            });
                        
                    }}>Follow</button>}

            </div>
            <div className={s.users_profile__info}>
                <div className={s.users_profile__name}>
                    <p>{u.name}</p>
                    <p>{u.status}</p>
                </div>
                <div className={s.users_profile__location}>
                    <p>{"не указан"/*u.location.country*/}</p>
                    <p>{"не указан"/*u.location.city*/}</p>
                </div>
            </div>

        </div>)
    }
        <div className={s.users_pages}>
            {pages.map(p => {
                return <button type="button" className={props.currentPage === p && s.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</button>
            })}
        </div>
    </div >


}

export default Users;