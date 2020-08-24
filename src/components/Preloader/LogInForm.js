import React from "react";
import s from "./Preloader.module.css";
import { reduxForm, Field } from "redux-form";
import { Input } from "./FormControls";
import { requiredField } from "../../utils/Validator";

const LogInForm = (props) => (
  <form onSubmit={props.handleSubmit} className={s.auth_form}>
    <div className={s.auth_field}>
      <Field
        placeholder={"email"}
        name={"email"}
        component={Input}
        validate={[requiredField]}
      />
      <Field
        placeholder={"Password"}
        name={"password"}
        type={"password"}
        component={Input}
        validate={[requiredField]}
      />
    </div>
    <label>
      <Field
        type={"checkbox"}
        name={"rememberMe"}
        component={Input}
        validate={[requiredField]}
      />
      remember
    </label>
    <button>login</button>
  </form>
);

const LogInReduxForm = reduxForm({
  form: "LogIn",
})(LogInForm);

export default LogInReduxForm;
