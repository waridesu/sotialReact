import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    requestUser,
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching,
    setToggleFollowing,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {getCurrentPage, getPageSize, getTotalUsersCount, getUsers} from "../../redux/UsersSelector";

const UsersContainer = (props) => {
    useEffect(() => {
        props.requestUser(props.currentPage, props.pageSize);
//eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let onPageChanged = (p) => {
        props.requestUser(p, props.pageSize);
    }
    return (
        <>
            {props.isFetching ? (
                <Preloader/>
            ) : (
                <Users
                    users={props.users}
                    pageSize={props.pageSize}
                    totalUsersCount={props.totalUsersCount}
                    currentPage={props.currentPage}
                    onPageChanged={onPageChanged}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    followindInProgress={props.followingInProgress}
                />
            )}
        </>
    );
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching,
    setToggleFollowing,
    requestUser,
})(UsersContainer);
