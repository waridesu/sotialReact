import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus, setUserProfile,
    updateStatus,
} from "../../redux/profileReducer";
import Profile from "./Profile";
import Preloader from "../Preloader/Preloader";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {composeWihtAuthRedirect} from "../../HOC/HOC";

const ProfileContainer = ({authId,getUserProfile,getUserStatus,setUserProfile,...props}) => {
    const {match}= props
    useEffect(() => {
        const id =match.params.id || authId;
        getUserProfile(id);
        getUserStatus(id);
        return()=>{
            setUserProfile(null)
        }
    }, [match.params.id, authId,getUserProfile,getUserStatus,setUserProfile]);
    return (
        <>
            {!props.profile ? (
                <Preloader/>
            ) : (
                <Profile
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
        authId: state.auth.id,
    };
};
export default compose(
    composeWihtAuthRedirect,
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus,setUserProfile}),
    withRouter
)(ProfileContainer);
