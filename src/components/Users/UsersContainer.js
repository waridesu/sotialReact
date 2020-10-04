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

const UsersContainer = ({requestUser, currentPage, pageSize, isFetching, users, totalUsersCount, followingInProgress, follow, unfollow}) => {
    useEffect(() => {
        requestUser(currentPage, pageSize);
//eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const onPageChanged = (p) => {
        requestUser(p, pageSize);
    }
    return (
        <>
            {isFetching ? (
                <Preloader/>
            ) : (
                <Users
                    users={users}
                    pageSize={pageSize}
                    totalUsersCount={totalUsersCount}
                    currentPage={currentPage}
                    onPageChanged={onPageChanged}
                    follow={follow}
                    unfollow={unfollow}
                    followingInProgress={followingInProgress}
                />
            )}
        </>
    );
}


const mapStateToProps = (state) => {
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
