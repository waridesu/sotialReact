import React from "react";
import LogInReduxForm from "./LogInForm";
import { connect } from "react-redux";
import { logIn, logOut } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import {AppStateType} from "../../redux/redux_store";


const AuthDirect = (props:any) => {
  const onSubmit = (formData:any) => {
    props.LogIn(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return <LogInReduxForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state: AppStateType) => ({
isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { LogIn: logIn, LogOut: logOut })(AuthDirect);
