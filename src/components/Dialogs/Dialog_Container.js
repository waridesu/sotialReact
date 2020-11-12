import {resetAddMessage} from "../../redux/dialogReducer";
import Dialog from "./Dialog";
import { connect } from "react-redux";
import { compose } from "redux";
import { composeWihtAuthRedirect } from "../../HOC/HOC";

const mapStateToProps = (state) =>({
    dialog: state.dialog,
  });


export default compose(
  connect(mapStateToProps, { addThenClean: resetAddMessage }),
  composeWihtAuthRedirect
)(Dialog);
