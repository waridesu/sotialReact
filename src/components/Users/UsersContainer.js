import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getUSers,
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

const  UsersContainer= (props)=> {
  useEffect(()=>{
    props.getUSers(props.currentPage, props.pageSize);
//eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  let onPageChanged = (p) => {
   props.getUSers(p, props.pageSize);
  }
    return (
      <>
        {props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={props.users}
            pageSize={props.pageSize}
            totalUsersCount={props.totalUsersCount}
            currentPage={props.currentPage}
            onPageChanged={onPageChanged}
            follow={props.follow}
            unfollow={props.unfollow}
            followindInProgress={props.followindInProgress}
          />
        )}
      </>
    );
  }


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followindInProgress: state.usersPage.followindInProgress,
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
  getUSers,
})(UsersContainer);
