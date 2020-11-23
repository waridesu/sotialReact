import React from "react";
import AuthDirect from "../components/Preloader/AuthDirect";
import { connect } from "react-redux";
import { compose } from "redux";
import {AppStateType} from "../redux/redux_store";
type MapPropsType= ReturnType<typeof mapStateToPropsRedirect>
const mapStateToPropsRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth,
});

const withAuthRedirect= (Component:React.ComponentType): React.FC<MapPropsType>=>
    ({isAuth, ...props}:MapPropsType) => {
  return !isAuth ? <AuthDirect /> : <Component {...props} />;
};

export const composeWithAuthRedirect = compose(
  connect(mapStateToPropsRedirect),
  withAuthRedirect
);
