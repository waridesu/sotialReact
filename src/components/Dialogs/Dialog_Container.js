import { resetAddMassage } from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import { compose } from "redux";
import { composeWihtAuthRedirect } from "../../HOC/HOC";

let mapStateToProps = (state) => {
  return {
    dialog: state.dialog,
  };
};

export default compose(
  connect(mapStateToProps, { addThenClean: resetAddMassage }),
  composeWihtAuthRedirect
)(Dialog);
