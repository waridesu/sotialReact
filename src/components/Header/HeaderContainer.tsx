import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/authReducer";
import { compose } from "redux";
import {withRouter} from "react-router-dom";
import Header from "./Header";
import {AppStateType} from "../../redux/redux_store";

export type MapPropsType = ReturnType<typeof mapStateToProps>
export type DispatchPropsType ={
    logOut: () => void
}
const HeaderContainer= ({isAuth,login,logOut}:MapPropsType&DispatchPropsType) => <Header isAuth={isAuth} login={login} logOut={logOut}/>;

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default compose(
    withRouter,
    connect<MapPropsType,DispatchPropsType,{},AppStateType>(mapStateToProps, { logOut })
)(HeaderContainer) as any;
