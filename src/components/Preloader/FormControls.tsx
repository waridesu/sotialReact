import React from "react";
import s from "./FormControls.module.css";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
type FormControlPropsType ={
    meta: WrappedFieldMetaProps
}
const FormControl: React.FC<FormControlPropsType> = ({ meta:{touched,error}, children }) => {
  const hasError = touched && error;
  return (
    <div className={s.form_control + " " + (hasError ? s.error : null)}>
      {children}
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea className={s.textarea} {...input} {...restProps } />
    </FormControl>
  );
}; 

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, children, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input className={s.input} {...input} {...restProps} />
    </FormControl>
  );
};
export function createField<FormKeysType extends string>(placeholder: string|undefined,name: FormKeysType, components:React.FC<WrappedFieldProps>, valid:Array<any>, type?:string)
{return<Field
        placeholder={placeholder}
        name={name}
        component={components}
        validate={valid}
        type={type}
    />}
