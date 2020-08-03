import React from 'react';
import s from './Users.module.css';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = []
        for (let i = 1; i <= pagesCount && i <= 35; i++) {
            pages.push(i);
        }
        return <div>{
            props.users.map(u => <div className={s.users_profile} key={u.id}>
                <div className={s.subscriber}>
                    <img src={u.photos.small != null ? u.photos.small : "https://www.vikids.ru/images/default_avatar.png?avatar_cached_at=1562752082"} alt="user avatar" />
                    {u.followed
                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>}

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
        </div>


    }

export default Users;