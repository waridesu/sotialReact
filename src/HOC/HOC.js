import React from "react";
import AuthDirect from "../components/Preloader/AuthDirect";
import { connect } from "react-redux";
import { compose } from "redux";

let mapStateToPropsRedirect = (state) => ({
  isAuth: state.auth.isAuth,
});

const wihtAuthRedirect = (Component) => (props) => {
  return !props.isAuth ? <AuthDirect /> : <Component {...props} />;
};

export const composeWihtAuthRedirect = compose(
  connect(mapStateToPropsRedirect),
  wihtAuthRedirect
);
