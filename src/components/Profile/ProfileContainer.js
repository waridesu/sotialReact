import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateStatus,
} from "../../redux/profileReducer";
import Profile from "./Profile";
import Preloader from "../Preloader/Preloader";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { composeWihtAuthRedirect } from "../../HOC/HOC";

const ProfileContainer = (props) => {
  useEffect(() => {
    let id = props.match.params.id;
    if (!id) {
      id = props.id;
    }
    props.getUserProfile(id);
    props.getUserStatus(id);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {!props.profile ? (
        <Preloader />
      ) : (
        <Profile
          {...props}
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
        />
      )}
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.id,
  };
};
export default compose(
  composeWihtAuthRedirect,
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
  withRouter
)(ProfileContainer);
