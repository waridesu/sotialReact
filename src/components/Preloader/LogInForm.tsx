import React from "react";
import s from "./Preloader.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "./FormControls";
import {requiredField} from "../../utils/Validator";

const LogInForm = ({handleSubmit, error}:InjectedFormProps) => (
    <form onSubmit={handleSubmit} className={s.auth_form}>
        <div className={s.auth_field}>
            <div>
                {createField("waridesu@gmail.com", "email", Input, [requiredField])}
                {createField("password", "password", Input, [requiredField], "password")}
                {error && <div className={s.sumError}>{error}</div>}
            </div>
        </div>
        <label>
            {createField(undefined, "rememberMe", Input, [], "checkbox")}
            remember
        </label>
        <button>login</button>
    </form>
);

const LogInReduxForm = reduxForm({
    form: "LogIn",
})(LogInForm);

export default LogInReduxForm;
