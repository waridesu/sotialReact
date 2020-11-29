import React from "react";
import s from "./Dialog.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requiredField, maxLength} from "../../utils/Validator";
import {Textarea} from "../Preloader/FormControls";
import {newMessageType} from "./Dialog";

const maxLength30= maxLength(30);
const AddMessageForm = ({handleSubmit}:InjectedFormProps<newMessageType>) => {
    return <form onSubmit={handleSubmit} className={s.send_input}>
        <Field
            component={Textarea}
            name="payload"
            placeholder="Enter your massage"
            validate={[requiredField, maxLength30]}
        />
        <button>Send</button>
    </form>
}

const AddMessageFormRedux = reduxForm<newMessageType>({ form: "payload" })(
  AddMessageForm
);

export default AddMessageFormRedux;
