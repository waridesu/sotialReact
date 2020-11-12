import React from "react";
import s from "./Dialog.module.css";
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLength} from "../../utils/Validator";
import {Textarea} from "../Preloader/FormControls";

const maxLength30= maxLength(30);

const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit} className={s.send_input}>
        <Field
            component={Textarea}
            name="newMessageText"
            placeholder="Enter your massage"
            validate={[requiredField, maxLength30]}
        />
        <button>Send</button>
    </form>
}

const AddMessageFormRedux = reduxForm({ form: "DialogAddMessage" })(
  AddMessageForm
);

export default AddMessageFormRedux;
