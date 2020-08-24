import React from "react";
import { connect } from "react-redux";
import { getAuthData, LogOut } from "../../redux/authReducer";
import LogIn from "./LogIn";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const LogInContainer = (props) => <LogIn {...props} />;

let mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getAuthData, LogOut })
)(LogInContainer);
