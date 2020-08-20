import React from "react";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateStatus } from "./../../redux/profileReducer";
import Profile from "./Profile";
import Preloader from "../Preloader/Preloader";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    if (!id) {
      id = 9788;
    }
    this.props.getUserProfile(id);
    this.props.getUserStatus(id);
  }
  render() {
    return (
      <>
        {!this.props.profile ? (
          <Preloader />
        ) : (
          <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status
  };
};
export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
  withRouter
)(ProfileContainer);
