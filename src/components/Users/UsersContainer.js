import React from 'react';
import { connect } from 'react-redux';
import { getUSers,follow,unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggleIsFetching,setToggleFollowing } from '../../redux/usersReducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUSers(this.props.currentPage,this.props.pageSize);
    }
    onPageChanged = (p) => {
        this.props.getUSers(p,this.props.pageSize);
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : 
                <Users users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followindInProgress={this.props.followindInProgress} />}

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followindInProgress: state.usersPage.followindInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching,
    setToggleFollowing,
    getUSers
})(UsersContainer)