import React from "react";
import s from "./Preloader.module.css";
import { reduxForm, Field } from "redux-form";
import {createField, Input} from "./FormControls";
import { requiredField } from "../../utils/Validator";

const LogInForm = ({handleSubmit, error}) => (
    <form onSubmit={handleSubmit} className={s.auth_form}>
        <div className={s.auth_field}>
            <div>
                {createField("email","email",Input,[requiredField])}
                {createField("Password","password",Input,[requiredField],"password")}
            {error && <div className={s.sumError}>{error}</div>}
            </div>
        </div>
        <label>
            {createField(null,"rememberMe",Input,null,"checkbox")}
            remember
        </label>

        <button>login</button>
    </form>
);

const LogInReduxForm = reduxForm({
  form: "LogIn",
})(LogInForm);

export default LogInReduxForm;
