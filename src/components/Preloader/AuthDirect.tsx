import React from "react";
import LogInReduxForm from "./LogInForm";
import { connect } from "react-redux";
import { logIn, logOut } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import {AppStateType} from "../../redux/redux_store";

type stateToProps= ReturnType<typeof mapStateToProps>
interface mapDispatchToProps {
  logIn:(email: string, password: string, rememberMe: boolean)=>void
}
export interface loginFormValuesType{
  email: string
  password: string
  rememberMe: boolean
}
export type loginFormValuesTypeKeys = Extract<keyof loginFormValuesType, string>
const AuthDirect = ({isAuth, logIn}:stateToProps&mapDispatchToProps) => {
  const onSubmit = (formData:loginFormValuesType) => {
    logIn(formData.email, formData.password, formData.rememberMe);
  };
  if (isAuth) {
    return <Redirect to="/profile" />;
  }
  return <LogInReduxForm onSubmit={onSubmit} />;
};

const mapStateToProps = (state: AppStateType) => ({
isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, { logIn, logOut })(AuthDirect);
