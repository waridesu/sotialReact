import React from "react";
import {resetAddMessage} from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {compose} from "redux";
import {composeWithAuthRedirect} from "../../HOC/HOC";
import {AppStateType} from "../../redux/redux_store";


const mapStateToProps = (state: AppStateType) => ({
    dialog: state.dialog,
});


export default compose<React.ComponentType>(
    connect(mapStateToProps, {resetAddMessage}),
    composeWithAuthRedirect
)(Dialog);
