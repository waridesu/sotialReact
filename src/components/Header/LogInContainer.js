import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../redux/authReducer";
import LogIn from "./LogIn";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const LogInContainer = (props) => <LogIn {...props} />;

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default compose(
    withRouter,
    connect(mapStateToProps, {  LogOut: logOut })
)(LogInContainer);
