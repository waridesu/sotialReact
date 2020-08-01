import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';


class UsersClass extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items/*[        
                { id: 0, avatarUrl: 'https://via.placeholder.com/40', followed: true, Name: 'Liam', status: 'some  status', location: { city: 'Moscow', country: 'Russia' } },
                { id: 1, avatarUrl: 'https://via.placeholder.com/40', followed: false, Name: 'Masone', status: 'some  status', location: { city: 'Kiev', country: 'Ukraine' } },
                { id: 2, avatarUrl: 'https://via.placeholder.com/40', followed: true, Name: 'Noah', status: 'some  status', location: { city: 'Minsk', country: 'Belarus' } },
                { id: 3, avatarUrl: 'https://via.placeholder.com/40', followed: false, Name: 'William', status: 'some  status', location: { city: 'Berlin', country: 'Germany' } },
                { id: 4, avatarUrl: 'https://via.placeholder.com/40', followed: true, Name: 'James', status: 'some  status', location: { city: 'Praga', country: 'Czech' } },
                { id: 5, avatarUrl: 'https://via.placeholder.com/40', followed: false, Name: 'Oliver', status: 'some  status', location: { city: 'Paris', country: 'France' } },
                { id: 6, avatarUrl: 'https://via.placeholder.com/40', followed: true, Name: 'Benjamin', status: 'some  status', location: { city: 'Amsterdam', country: 'Netherlands' } },
                { id: 7, avatarUrl: 'https://via.placeholder.com/40', followed: false, Name: 'Elijah', status: 'some  status', location: { city: 'Lisbon', country: 'Portugal' } }
        ]*/);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
    onPageChanged = (p) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);

        });
    }


    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = []
        for (let i = 1; i <= pagesCount&&i<=35; i++) {
            pages.push(i);
        }
        return <div>{
            this.props.users.map(u => <div className={s.users_profile} key={u.id}>
                <div className={s.subscriber}>
                    <img src={u.photos.small != null ? u.photos.small : "https://www.vikids.ru/images/default_avatar.png?avatar_cached_at=1562752082"} alt="user avatar" />
                    {u.followed
                        ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => this.props.follow(u.id)}>Follow</button>}

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
                    return <button type="button" className={this.props.currentPage === p && s.selectedPage}
                        onClick={(e) => { this.onPageChanged(p) }}>{p}</button>
                })}
            </div>
        </div>


    }
}
export default UsersClass;