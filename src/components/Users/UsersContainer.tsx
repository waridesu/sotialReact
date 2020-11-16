import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    requestUser,
    follow,
    unfollow, SetIsUsersCase, usersType,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {getCurrentPage, getPageSize, getTotalUsersCount, getUsers} from "../../redux/UsersSelector";
import {AppStateType} from "../../redux/redux_store";

type MapStatePropsType ={
    currentPage: number
    pageSize: number
    isFetching: boolean
    users: Array<usersType>
    totalUsersCount: number
    followingInProgress: Array<number>
    isUsers: boolean
}
type MapDispatchPropsType= {
    follow: (id: number) => void
    unfollow: (id: number) => void
    requestUser: (currentPage: number, pageSize: number) => void
    SetIsUsersCase: (SetIsUsersCase: boolean) => void
}
type  OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

const UsersContainer: React.FC<PropsType> = ({requestUser, pageSize, SetIsUsersCase, currentPage, isFetching, users, followingInProgress, follow, unfollow}) => {
    useEffect(() => {
        SetIsUsersCase(true)
        requestUser(currentPage, pageSize);
        return () => {
            SetIsUsersCase(false)
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


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isUsers: state.usersPage.isUser,
    });

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {
    follow,
    unfollow,
    requestUser,
    SetIsUsersCase,
})(UsersContainer);
