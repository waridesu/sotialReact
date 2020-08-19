import React from "react";
import { connect } from "react-redux";
import { getUserProfile } from "./../../redux/profileReducer";
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
  }
  render() {
    return (
      <>
        {!this.props.profile ? (
          <Preloader />
        ) : (
          <Profile {...this.props} profile={this.props.profile} />
        )}
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};
export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter
)(ProfileContainer);
