import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    requestUser,
    follow,
    unfollow, actions,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {getCurrentPage, getPageSize, getTotalUsersCount, getUsers} from "../../redux/UsersSelector";
import {AppStateType} from "../../redux/redux_store";

type StatePropsType = ReturnType<typeof mapStateToProps>

interface MapDispatchPropsType {
    follow: (id: number) => void
    unfollow: (id: number) => void
    requestUser: (currentPage: number, pageSize: number) => void
    SetIsUsersCase: (SetIsUsersCase: boolean) => void
}

const UsersContainer = ({requestUser, pageSize, SetIsUsersCase, currentPage, isFetching, users, followingInProgress, follow, unfollow}: StatePropsType&MapDispatchPropsType) => {
    useEffect(() => {
        actions.SetIsUsersCase(true)
        requestUser(currentPage, pageSize);
        return () => {
            actions.SetIsUsersCase(false)
        }
    }, [requestUser, currentPage, pageSize, SetIsUsersCase])
    return (
        <>
            {isFetching ? (
                <Preloader/>
            ) : (
                <Users
                    users={users}
                    follow={follow}
                    unfollow={unfollow}
                    followingInProgress={followingInProgress}
                />
            )}
        </>
    );
}


const mapStateToProps = (state: AppStateType) => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
    isUsers: state.usersPage.isUser,
});

export default connect<StatePropsType, MapDispatchPropsType, {}, AppStateType>
(mapStateToProps, {
    follow,
    unfollow,
    requestUser,...actions})(UsersContainer);
