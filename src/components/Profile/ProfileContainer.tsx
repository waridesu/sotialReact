import React, {useEffect} from "react";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus, setUserProfile,
    updateStatus,
} from "../../redux/profileReducer";
import Profile from "./Profile";
import Preloader from "../Preloader/Preloader";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {composeWihtAuthRedirect} from "../../HOC/HOC";
import {AppStateType} from "../../redux/redux_store";

type MapPropsType = ReturnType<typeof mapStateToProps>

type MapDispatchPropsType = {
    getUserProfile: (id: number | null) => void
    getUserStatus: (id: number | null) => void
    setUserProfile: () => void
    updateStatus: (status: string| undefined) => void
}
type PathParamsType = {
    id: string
}
type PropsType = MapPropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>
const ProfileContainer: React.FC<PropsType> = ({authId, profile, status, match, getUserProfile, getUserStatus, setUserProfile, updateStatus}) => {

    useEffect(() => {
        const id: number | null = +match.params.id || authId;
        getUserProfile(id);
        getUserStatus(id);
        return () => {
            setUserProfile()
            // eslint-disable-next-line
            status = undefined
        }
    }, [match.params.id, authId, getUserProfile, getUserStatus, setUserProfile]);
    return (
        <>
            {!profile ? (
                <Preloader/>
            ) : (
                <Profile
                    profile={profile}
                    status={status}
                    updateStatus={updateStatus}
                />
            )}
        </>
    );
};

const mapStateToProps = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authId: state.auth.id,
    };
};
export default compose<React.ComponentType>(
    composeWihtAuthRedirect, connect(mapStateToProps,
        {
            getUserProfile,
            getUserStatus,
            setUserProfile,
            updateStatus
        }),
    withRouter
)(ProfileContainer);
