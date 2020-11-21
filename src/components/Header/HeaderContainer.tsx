import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/authReducer";
import { compose } from "redux";
import {withRouter} from "react-router-dom";
import Header, {DispatchPropsType, MapPropsType} from "./Header";
import {AppStateType} from "../../redux/redux_store";

const LogInContainer: React.FC<MapPropsType&DispatchPropsType> = ({isAuth,login,logOut}) => <Header isAuth={isAuth} login={login} logOut={logOut}/>;

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default compose(
    withRouter,
    connect<MapPropsType,DispatchPropsType,{},AppStateType>(mapStateToProps, { logOut })
)(LogInContainer);