import React from "react";
import s from "./Dialog.module.css";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requiredField, maxLength} from "../../utils/Validator";
import {Textarea} from "../Preloader/FormControls";
import {MessageType} from "./Dialog";

const maxLength30= maxLength(30);
type MassageFormsType = Extract<keyof MessageType, string>
const AddMessageForm = ({handleSubmit}:InjectedFormProps<MassageFormsType>) => {
    return <form onSubmit={handleSubmit} className={s.send_input}>
        <Field
            component={Textarea}
            name="messageText"
            placeholder="Enter your massage"
            validate={[requiredField, maxLength30]}
        />
        <button>Send</button>
    </form>
}

const AddMessageFormRedux = reduxForm<MassageFormsType>({ form: "DialogAddMessage" })(
  AddMessageForm
);

export default AddMessageFormRedux;
