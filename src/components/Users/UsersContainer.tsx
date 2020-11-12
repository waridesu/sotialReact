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
    setToggleFollowing, SetIsUsersCase, usersType,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {getCurrentPage, getPageSize, getTotalUsersCount, getUsers} from "../../redux/UsersSelector";
type propsType ={
    currentPage: number
    pageSize:number
    isFetching:boolean
    totalUsersCount:number
    users: Array<usersType>
    requestUser:(currentPage: number, pageSize: number) => void
    followingInProgress:Array<number>
    follow:()=>void
    unfollow:()=>void
    SetIsUsersCase:(SetIsUsersCase:boolean)=>void
}
const UsersContainer: React.FC<propsType> = ({requestUser, SetIsUsersCase, currentPage, pageSize, isFetching, users, totalUsersCount, followingInProgress, follow, unfollow}) => {
    useEffect(() => {
        SetIsUsersCase(true)
        requestUser(currentPage, pageSize);
        return () => {
            SetIsUsersCase(false)
        }
    }, [requestUser, currentPage, pageSize,SetIsUsersCase])

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
        isUsers: state.usersPage.isUsers,
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
    SetIsUsersCase,
})(UsersContainer);
