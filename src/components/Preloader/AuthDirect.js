import React from "react";
import LogInReduxForm from "./LogInForm";
import { connect } from "react-redux";
import { logIn, logOut } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";


const AuthDirect = (props) => {
  const onSubmit = (formData) => {
    props.LogIn(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return <LogInReduxForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { LogIn: logIn, LogOut: logOut })(AuthDirect);
