import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching } from '../../redux/usersReducer';
import Users from './Users';
import * as axios from 'axios'
import Preloader from '../Preloader/Preloader';

class UsersApi extends React.Component {
    componentDidMount() {
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.setToggleIsFetching(false);
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
        this.props.setToggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.setToggleIsFetching(false);
            this.props.setUsers(response.data.items);

        });
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : 
            <Users users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow} />}
            
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching
})(UsersApi)
export default UsersContainer;