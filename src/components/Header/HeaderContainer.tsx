import React from "react";
import {connect} from "react-redux";
import {logOut} from "../../redux/authReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Header from "./Header";
import {AppStateType} from "../../redux/redux_store";

export type MapPropsType = ReturnType<typeof mapStateToProps>
export type DispatchPropsType = {
    logOut: () => void
}
const HeaderContainer: React.FC<MapPropsType & DispatchPropsType & {} & AppStateType> =
    ({isAuth, login, logOut}) => <Header isAuth={isAuth} login={login} logOut={logOut}/>;

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {logOut})
)(HeaderContainer);
