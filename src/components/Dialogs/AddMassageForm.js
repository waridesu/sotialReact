import React from "react";
import s from "./Dialog.module.css";
import { Field, reduxForm } from "redux-form";
import { requiredField,maxLength } from "../../utils/Validator";
import { Textarea } from "../Preloader/FormControls";

const maxLength30= maxLength(30);

const AddMassageForm = (props) => (
  <form onSubmit={props.handleSubmit} className={s.send_input}>
    <Field
      component={Textarea}
      name="newMassageText"
      placeholder="Enter your massage"
      validate={[requiredField,maxLength30]}
    />
    <button>Send</button>
  </form>
);

const AddMassageFormRedux = reduxForm({ form: "DialogAddMassage" })(
  AddMassageForm
);

export default AddMassageFormRedux;
