import React from "react";
import s from "./Preloader.module.css";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Input} from "./FormControls";
import {requiredField} from "../../utils/Validator";

const LogInForm = ({handleSubmit, error}:InjectedFormProps) => (
    <form onSubmit={handleSubmit} className={s.auth_form}>
        <div className={s.auth_field}>
            <div>
                {createField("email", "email", Input, [requiredField])}
                {createField("Password", "password", Input, [requiredField], "password")}
                {error && <div className={s.sumError}>{error}</div>}
            </div>
        </div>
        <label>
            {createField(undefined, "rememberMe", Input, [], "checkbox")}
            remember
        </label>
        <button>login</button>
        <p>Логин: <b>waridesu@gmail.com</b></p>
        <p>Пароль: <b>password</b></p>
    </form>
);

const LogInReduxForm = reduxForm({
    form: "LogIn",
})(LogInForm);

export default LogInReduxForm;
